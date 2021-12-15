import bcrypt from "bcryptjs";
import db from "../../../lib/mariadb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let { name, email, password } = req.body;
    name = typeof name === "string" && name.trim().length > 0 ? name : false;
    email = typeof email === "string" && email.trim() ? email : false;
    password =
      typeof password === "string" && password.trim().length > 0
        ? password
        : false;

    if (name && email && password) {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.push("users", {
          name,
          email,
          address: "hpur",
          password: hashedPassword,
        });
        res.status(200).json({ message: "Signup Successful!" });
      } catch (error) {
        console.log(error.message);
        res.status(500).json({
          error: error.message,
        });
      }
    } else {
      res.status(400).json({
        error: "There was a problem in your request!",
      });
    }
  } else {
    res.status(405).json({ error: "There was a problem in your request!" });
  }
}
