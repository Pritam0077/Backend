const express = require("express");
require("dotenv").config();
const app = express();

// const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/login", (req, res) => {
  res.send("Plz Login");
});

app.listen(process.env.PORT, () => {
  console.log(`app is listening on ${process.env.port}`);
});
