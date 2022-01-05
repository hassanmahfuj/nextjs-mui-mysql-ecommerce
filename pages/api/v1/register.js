// imports
import bcrypt from "bcryptjs";
import db from "../../../models";
import validator from "../../../lib/validator";

const User = db.users;

export default async function handler(req, res) {
  if (req.method === "POST") {
    // parsing data from request body
    let { email, password } = req.body;

    // validating user data
    email = validator.email(email);
    password = validator.password(password);

    // only procced if email and password is valid
    if (email && password) {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          email,
          password: hashedPassword,
        });
        res.status(200).json({ message: "Signup Successful!", user });

        // database error
      } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
          res.status(403).json({ error: "Email already exists!" });
        } else {
          res.status(500).json({ error: error.message });
        }
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
