const fs = require("fs").promises;
const path = require("path");

// console.log(process.cwd())

const imagesPath = path.join(process.cwd(), "images");
// console.log(imagesPath)

// fs.writeFile(`${imagesPath}/file.txt`, "Some file text")
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const filesPath = path.join(process.cwd(), "files");

// fs.rename(`${imagesPath}/file.txt`, `${filesPath}/file.txt`);

// fs.unlink(`${filesPath}/file.txt`)