const express = require("express");
const ejs = require("ejs");
const app = express();

const PORT = process.eventNames.PORT || 5000;

// MiddleWares
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
