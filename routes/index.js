const express = require("express");
const router = express.Router();

// All available api routes and parameters

router.get("/", (req, res) => {
  res.json({
    "text-ttr": {
      text1: "Primary text to write",
      text2: "Secondary text to write",
      bgColor: "Background color of image (#ffffff)",
      textColor: "Text color of image (#000000)",
      example: `${baseurl}/text-ttr?text1=Akansh%20Sirohi&text2=Altered%20Coder`,
    },
    ytdl: {
      url: "Youtube video url",
      example: `${baseurl}/ytdl?url=https://www.youtube.com/watch?v=Az-mGR-CehY`,
    },
  });
});

module.exports = router;
