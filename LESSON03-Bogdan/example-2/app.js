const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

// app.use(express.json());

const bodyJSON = express.json();

app.post("/login", bodyJSON, (req, res) => {
  console.log(req.body);
});

app.listen(port);
