const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get("/", (req, res)=> {
    res.send("<Добро пожаловать на наш сайт");
});

app.get("/products", (req, res)=> {
    // res.set("Access-Control-Allow-Origin", "*")
    res.send([{
        name: "iPhone X",
        brand: "Apple"
    }])
})

app.listen(port)