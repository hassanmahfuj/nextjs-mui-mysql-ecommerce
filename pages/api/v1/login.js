import bcrypt from "bcryptjs";
import db from "../../../lib/mariadb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let { email, password } = req.body;
    email = typeof email === "string" && email.trim() ? email : false;
    password =
      typeof password === "string" && password.trim().length > 0
        ? password
        : false;

    if (email && password) {
      try {
        const result = await db.find("users", "email", email);
        if (result.length > 0) {
          const success = await bcrypt.compare(password, result[0].password);
          if (success) {
            res.status(200).json({ message: "Login Successful!" });
          } else {
            res
              .status(403)
              .json({ error: "There was a problem in your request!1" });
          }
        } else {
          res
            .status(404)
            .json({ error: "There was a problem in your request!2" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(400).json({ error: "There was a problem in your request!3" });
    }
  } else {
    res.status(405).json({ error: "There was a problem in your request!4" });
  }
}
