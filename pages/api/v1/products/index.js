import db from "../../../../models";
import withProtect from "../../../../middlewares/withProtect";

const Product = db.products;

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      let { title, price, description } = req.body;
      const product = await Product.create({ title, price, description });
      res.status(200).json(product);
      break;

    case "GET":
      res.status(200).json(req.user);

    default:
      res.status(405).json({ error: "There was a problem in your request!" });
  }
};

export default withProtect(handler);
