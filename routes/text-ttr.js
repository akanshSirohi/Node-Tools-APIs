const express = require("express");
const router = express.Router();
const textTTR = require("text-ttr");

// Text-TTR API

router.get("/", (req, res) => {
  let opts = {};
  if ("text1" in req.query) {
    opts["text1"] = req.query.text1;
  }
  if ("text2" in req.query) {
    opts["text2"] = req.query.text1;
  }
  if ("bgColor" in req.query) {
    opts["bgColor"] = req.query.bgColor;
  }
  if ("textColor" in req.query) {
    opts["textColor"] = req.query.textColor;
  }
  console.log(opts);
  let img = textTTR(opts);
  res.json({ result: img });
});

module.exports = router;
