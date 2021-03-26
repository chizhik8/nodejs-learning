// CommonJS modules

const { info, log } = require("./module");
const My = require("./moduleClass");

// обьяление глобальной переменной, т.е. обьект global пробрасывается в каждый модуль
global.a = 25;

info("name");
log("name");

const my = new My("My");
my.info("class");
my.log("class");
