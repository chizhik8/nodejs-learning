const http = require("http");

const port = require("./config");

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (req.url === "/") {
      res.write("<h2>Добро пожаловать на сайт!</h2>");
    } else if (req.url === "/contacts") {
      res.write("<h2>Наши контакты</h2>");
    } else if (req.url === "/shop") {
      res.write("<h2>Наши товары</h2>");
    }
    res.end();
  })
  .listen(port, () => console.log("It's work!"));

// такая маршрутизация неудобное, поэтому и был придуман Express
