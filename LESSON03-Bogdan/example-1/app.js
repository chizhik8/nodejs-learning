const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

// app.set("json spaces", 2);
// app.set("json replacer", resplacer);

const products = require("./products");

app.get("/products", (req, res)=> {
    // res.send(products);
    // res.send(undefined)
    res.json(products);
    // res.json(null)
});

app.listen(port);