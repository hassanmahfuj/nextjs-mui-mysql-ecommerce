export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      let { title, price, description } = req.body;
      res.status(200).json({ title, price, description });
      break;

    case "GET":
      let data = req.query;
      res.send(data);

    default:
      res.status(405).json({ error: "There was a problem in your request!" });
  }
}
