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

app.get("/", function (req, res) {
  let today = new Date();
  let currentDay = today.getDay();
  let day = "";
  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error: current day is equal to: " + currentDay);
  }
  res.render("list", { day: day });
});

app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
