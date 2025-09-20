require("dotenv").config();
const express = require("express");
const app = express();
// const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("This is Twitter");
})

app.get("/login", (req, res) => {
    res.send("Logged in successfully");
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

