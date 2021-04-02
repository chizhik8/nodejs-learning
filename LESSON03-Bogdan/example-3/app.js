const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

const products = require("./products");

app.get("/products", ({ query }, res) => {
  // console.log(req.query.brand)
  // console.log(req.query.name)
  const filterProducts = products.filter(
    ({ brand, name }) => brand === query.brand && name === query.name
  );
  res.json(filterProducts);
});

app.listen(port);
