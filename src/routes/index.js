const example = require("../controllers/exampleController");

module.exports = (app) => {
  app.route("/example").get(example.getData);
};
