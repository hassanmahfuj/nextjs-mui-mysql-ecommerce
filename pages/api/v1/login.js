// imports
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../../../lib/mariadb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // parsing data from request body
    let { email, password } = req.body;

    // validating user data
    email =
      typeof email === "string" && email.trim().length > 0 ? email : false;
    password =
      typeof password === "string" && password.trim().length > 0
        ? password
        : false;

    // only procced if email and password is valid
    if (email && password) {
      try {
        const result = await db.find("users", "email", email);
        if (result.length > 0) {
          const success = await bcrypt.compare(password, result[0].password);
          if (success) {
            const token = jwt.sign(
              {
                email,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: "1h",
              }
            );
            res
              .status(200)
              .json({ access_token: token, message: "Login Successful!" });

            // password is not matched
          } else {
            res.status(403).json({ error: "Invalid email or password!" });
          }

          // email not found
        } else {
          res.status(404).json({ error: "Email is not registered!" });
        }

        // database error
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

      // email or password is invalid
    } else {
      res.status(400).json({ error: "There was a problem in your request!" });
    }

    // not an accepted method
  } else {
    res.status(405).json({ error: "There was a problem in your request!" });
  }
}
