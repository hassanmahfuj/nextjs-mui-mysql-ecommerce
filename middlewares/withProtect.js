const withProtect = (handler) => (req, res) => {
  res.user = {
    name: "Hassan",
    id: 1234,
  };

  return handler(req, res);
};

export default withProtect;
