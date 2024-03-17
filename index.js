require("dotenv").config();

const express = require("express");
const app = express();
const port = 3004;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/name", (req, res) => {
  res.send("I have no name");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at my Website</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
