// imports
import hash from "../../../lib/hash";
import jwt from "jsonwebtoken";
import db from "../../../models";
import validator from "../../../lib/validator";

const User = db.users;

export default async function handler(req, res) {
  if (req.method === "POST") {
    // parsing data from request body
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (user !== null) {
        if (hash(password) === user.password) {
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

    // not an accepted method
  } else {
    res.status(405).json({ error: "There was a problem in your request!" });
  }
}
