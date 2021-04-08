const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

global.baseurl = `http://localhost:${port}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));
app.use("/text-ttr", require("./routes/text-ttr"));
app.use("/ytdl", require("./routes/ytdl"));

app.listen(port, () => {
  console.log(`Server started on port ${baseurl}`);
});
