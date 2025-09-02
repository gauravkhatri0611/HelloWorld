const express = require("express");
const app = express();
app.listen(4000, () => {
  console.log("app is running on port 4000");
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
