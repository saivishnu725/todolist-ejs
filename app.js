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

// entered item
let item = "";

app.get("/", function (req, res) {
  let today = new Date();
  let day = "";
  day = today.toLocaleDateString("en-us", { weekday: "long" });
  res.render("list", { day: day, item: item });
});

app.post("/", function (req, res) {
  item = req.body.item;
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
