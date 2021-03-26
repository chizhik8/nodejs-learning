const express = require("express");
const app = express();
const myRouter = require("./router");

app.use("/router.js", myRouter);

app.get("/", myRouter);

app.get("/about", myRouter);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
