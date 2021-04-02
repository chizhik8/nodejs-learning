const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000;

const bodyJSON = bodyParser.json();

app.post("/login", bodyJSON, (req, res)=> {
    console.log(req.body)
});

app.listen(port);