import db from "../../../../models";
import validator from "../../../../lib/validator";

const Product = db.products;

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      let { page = 1, limit = 10 } = req.query;
      limit = parseInt(limit);
      const offset = limit * (page - 1);
      try {
        const products = await Product.scope("withoutPrice").findAll({
          offset,
          limit,
        });
        res.status(200).json({ status: "success", products });
      } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
      }
      break;

    case "POST":
      let { name, price, description = "No Description" } = req.body;

      name = validator.string(name);
      price = validator.float(price);

      if (name && price) {
        try {
          await Product.create({ name, price, description });
          res
            .status(200)
            .json({ status: "success", message: "Product Added." });
        } catch (error) {
          res.status(400).json({ status: "error", message: error.message });
        }
      } else {
        res.status(400).json({ status: "error", message: "Validation error" });
      }
      break;

    default:
      res.status(405).json({ error: "There was a problem in your request!" });
  }
};

export default handler;
