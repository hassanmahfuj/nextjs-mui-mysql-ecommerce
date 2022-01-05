import db from "../../../../models";
import validator from "../../../../lib/validator";

const Product = db.products;

export default async function handler(req, res) {
  const id = req.query.id;

  switch (req.method) {
    case "GET":
      try {
        const product = await Product.findByPk(id);
        res.status(200).json({ status: "success", product });
      } catch (error) {
        res.status(200).json({ status: "error", message: error.message });
      }
      break;

    case "PUT":
      const { name, price, description } = req.body;
      try {
        const product = await Product.update(
          { name, price, description },
          { where: { id } }
        );
        res
          .status(200)
          .json({ status: "success", message: "Product Updated.", product });
      } catch (error) {
        res.status(200).json({ status: "error", message: error.message });
      }
      break;

    case "DELETE":
      try {
        const product = await Product.destroy({ where: { id } });
        res
          .status(200)
          .json({ status: "success", message: product + " Product Deleted." });
      } catch (error) {
        res.status(200).json({ status: "error", message: error.message });
      }
      break;

    default:
      res.status(405).json({ error: "There was a problem in your request!" });
  }
}
