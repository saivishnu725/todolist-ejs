//jshint esversion:6

import express from "express";
import bodyParser from "body-parser";

const app = express();

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//path
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//use ejs
app.set("view engine", "ejs");

// entered items
let items = [];

app.get("/", function (req, res) {
  let today = new Date();
  let date = today.toLocaleDateString("en-us", { day: "numeric", month: "long" });
  let day = today.toLocaleDateString("en-us", { weekday: "long" });
  res.render("list", { date: date, day: day, items: items });
});

app.post("/", function (req, res) {
  items.push(req.body.item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
