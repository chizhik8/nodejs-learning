const fs = require("fs");

console.log("Start");

setTimeout(() => {
  console.log("setTimeout happened");
}, 0);

setImmediate(() => {
  console.log("setImmediate happened");
});

new Promise((resolve) => {
  resolve("Promise happened befor");
  process.nextTick(() => console.log("nextTick befor"));
}).then(console.log);

Promise.resolve().then(() => console.log("Promise 1 happened"));
Promise.resolve().then(() => console.log("Promise 2 happened"));
Promise.resolve().then(() => console.log("Promise 3 happened"));

new Promise((resolve) => {
  resolve("Promise happened after");
  process.nextTick(() => console.log("nextTick after"));
}).then(console.log);

process.nextTick(() => console.log("nextTick 1 happened"));
process.nextTick(() => console.log("nextTick 2 happened"));
process.nextTick(() => console.log("nextTick 3 happened"));

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("setTimeout in readFile happened");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate in readFile happened");
  });
  console.log("File read");
});

console.log("End");
