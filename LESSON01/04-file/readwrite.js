const fs = require("fs");
const file = "../03-internal/path.js";

console.log("dirname", __dirname);
console.log("filename", __filename);

fs.readFile(file, (err, data) => {
  if (err) {
    console.error(err.message);
    return;
  }
  if (!fs.existsSync("./temp")) {
    fs.mkdirSync("./temp");
  }
  fs.writeFile(
    "./temp/path.js",
    `${data.toString()}console.log('Update')`,
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
});
