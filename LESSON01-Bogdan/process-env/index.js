// console.log(process);
// console.log(process.title);
console.log(process.argv);
// console.log(process.mainModule);
// console.log(process.mainModule["path"]);
// console.log(process.mainModule["filename"]);

const [, , name, lastName] = process.argv;
console.log(`Добро пожаловать, ${name} ${lastName}`);

console.log(__dirname);
console.log(__filename);
