const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req, res)=> {
    res.send("<h2>Главная страница сайта</h2>")
});

app.post("/search", (req, res)=> {
    const {search} = req.body;
    console.log(search)
    res.send(`Спасибо за интерес к ${search}!`);
})

app.listen(3000);