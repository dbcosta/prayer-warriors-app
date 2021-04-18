const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

const pathToViews = path.join("__dirname", "../templates/views");
const pathToPartials = path.join("__dirname", "../templates/partials");
const pathStatic = path.join("__dirname", "../public");

app.set("view engine", "hbs");
app.set("views", pathToViews);
hbs.registerPartials(pathToPartials);

app.use(express.static(pathStatic));

app.get("", (req, res) => {
  res.render("home", {
    title: "Prayer Warriors",
    description: "Come join us in being a Prayer Warrior for Jesus Christ!",
    createdBy: "Belinda DCosta",
  });
});

app.listen(3003, () => {
  console.log("App is up at port 3003!");
});