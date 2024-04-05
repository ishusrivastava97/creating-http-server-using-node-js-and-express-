const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.post("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
