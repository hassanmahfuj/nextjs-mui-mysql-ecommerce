// imports
import db from "../../../models";
import validator from "../../../lib/validator";

const User = db.users;

export default async function handler(req, res) {
  if (req.method === "POST") {
    // parsing data from request body
    const { email, password } = req.body;
    try {
      const user = await User.create({ email, password });
      res.status(200).json({ message: "Signup Successful!", user });
    } catch (error) {
      let errors = {};

      if (error.name === "SequelizeUniqueConstraintError") {
        errors.email = "Email already taken!";
      } else if (error.name === "SequelizeValidationError") {
        error.errors.forEach((e) => {
          errors[e.path] = e.message;
        });
      } else {
        errors.error = error.message;
      }

      res.status(403).json(errors);
    }

    // not an accepted method
  } else {
    res.status(405).json({ error: "There was a problem in your request!" });
  }
}
