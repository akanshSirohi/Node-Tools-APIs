const express = require("express");
const router = express.Router();
const ytdl = require("ytdl-core");
router.get("/", (req, res) => {
  if ("url" in req.query) {
    ytdl
      .getInfo(req.query.url)
      .then((info) => {
        res.json(info);
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.json({ msg: "You have to pass url" });
  }
});

module.exports = router;
