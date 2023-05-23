var express = require("express");
const Message = require("../models/message");
var router = express.Router();

router.get("/", async function (req, res, next) {
  const messages = await Message.find();

  res.render("index", { messages });
});

router
  .route("/new")
  .get(function (req, res, next) {
    res.render("form");
  })
  .post(async function (req, res, next) {
    const { username, text } = req.body;
    await Message.create({ name: username, text });

    res.status(200).redirect("/");
  });

module.exports = router;
