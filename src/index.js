const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Server 123</h1>");
});

const server = app.listen(3000, () => {
  console.log("server start");
});
