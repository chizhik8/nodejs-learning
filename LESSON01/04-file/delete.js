const fs = require("fs");

fs.unlink("temp/path.js", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.rmdir("temp", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Delete catalog done!");
  });
});

fs.unlink("newpath.js", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Delete file done!");
});
