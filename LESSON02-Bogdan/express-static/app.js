const express = require("express");

const app = express();
console.log(__dirname);
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/files"));

app.get("/", (req, res) => {
  res.send("<h2>Главная страница сайта</h2>");
});

app.listen(3000);
