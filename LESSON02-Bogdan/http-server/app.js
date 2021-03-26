const http = require("http");

http
  .createServer((request, response) => {
    console.log(`URL: ${request.url}`);
    console.log(`METHOD: ${request.method}`);
    console.log(`Headers: ${request.headers}`);

    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.write("<h2>Добро пожаловать на сайт!</h2>");
    response.end();
  })
  .listen(3000, () => console.log("It's work!"));

// реакцию на запрос проверяем через postman
// http://localhost:3000/
