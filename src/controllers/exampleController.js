const getData = (req, res) => {
  return res.json({ mes: "Route Running" });
};

module.exports = {
  getData,
};
