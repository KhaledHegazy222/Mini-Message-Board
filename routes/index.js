var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { messages });
});

router
  .route("/new")
  .get(function (req, res, next) {
    res.render("form");
  })
  .post(function (req, res, next) {
    const { username, text } = req.body;
    messages.push({ user: username, text, added: new Date().toUTCString() });

    res.status(200).redirect("/");
  });

module.exports = router;
