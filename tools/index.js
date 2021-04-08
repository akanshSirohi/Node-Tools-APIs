const express = require("express");
const router = express.Router();

// All available api routes and parameters

router.get("/", (req, res) => {
  res.json({
    "text-ttr": {
      info:
        "Creates illusion image with text written on it that only can be read when you tilt your screen",
      api: {
        text1: "Primary text to write",
        text2: "Secondary text to write",
        bgColor: "Background color of image (#ffffff)",
        textColor: "Text color of image (#000000)",
      },
      example: `${baseurl}/text-ttr?text1=Akansh%20Sirohi&text2=Altered%20Coder&bgColor=%23000&textColor=%23f00`,
    },
    ytdl: {
      info: "Youtube video downloader",
      api: { url: "Youtube video url" },
      example: `${baseurl}/ytdl?url=https://www.youtube.com/watch?v=Az-mGR-CehY`,
    },
  });
});

module.exports = router;
