const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/order", function (req, res) {
  res.render("order");
});

app.get("/breakfast", function (req, res) {
  res.render("breakfast");
});

app.get("/dinner", function (req, res) {
  res.render("dinner");
});

app.get("/lunch", function (req, res) {
  res.render("lunch");
});

app.post("/order", function (req, res) {
  res.redirect("/")
});

app.listen(3000, function () {
  console.log("Server started at port 3000!");
});
