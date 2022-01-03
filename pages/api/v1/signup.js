// imports
import bcrypt from "bcryptjs";
import db from "../../../models";

const User = db.users;

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
        // checking email is in database or not
        //const result = await db.find("users", "email", email);
        if (false) {
          res.status(501).json({ error: "Email is already registered!" });
        } else {
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = await User.create({
            email,
            password: hashedPassword,
          });
          res.status(200).json({ message: "Signup Successful!", user });
        }
        // database error
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

      // email or password is invalid
    } else {
      res.status(400).json({
        error: "There was a problem in your request!",
      });
    }

    // not an accepted method
  } else {
    res.status(405).json({ error: "There was a problem in your request!" });
  }
}
