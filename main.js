"use strict";
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

app.use(expressLayouts);
app.set("layout", "./layouts/full-width.ejs");
app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});
app.get("/", (req, res) => {
  res.render("index", { title: "Index Page" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});
app.get("/page1", (req, res) => {
  res.render("page1", { title: "Page1" });
});
app.get("/page2", (req, res) => {
  res.render("page2", { title: "Page2" });
});
app.get("/page3", (req, res) => {
  res.render("page3", { title: "Page3" });
});

app.get("/:something", (req, res) => {
  let reqItem = req.params.something;
  res.send(`You want to see a page about ${reqItem}  ... Go fuck yourself`);
});

app.listen(app.get("port"), () => {
  console.log(
    `Server is up and running on http://localhost:${app.get("port")}`
  );
});
