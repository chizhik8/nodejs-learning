const express = require("express");
const cors = require("cors");

const app = express(); // создаем наш сервер - app

app.use(cors()); // любой входящий запрос прогони через функцию cors()

app.use((req, res, next)=> {
    console.log("Обработка мультиязычности");
    next();
});

app.use((req, res, next)=> {
    console.log("Извлечение тела запроса в формат JSON");
    next();
});

app.get("/", (req, res)=> {
    res.send("<h2>Добро пожаловать на сайт!</h2>")
})

app.get("/about", (req, res)=> {
    res.send("<h2>О нас</h2>");
});

app.post("/users", (req, res)=> {

});

app.get("/contacts", (req, res)=> {
    res.send("<h2>Наши контакты</h2>")
});

app.listen(3000, ()=> console.log("Сервер запущен на 3000 порту!")); // запустили сервер