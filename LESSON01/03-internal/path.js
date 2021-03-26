const path = require("path");

// создает относительный путь
console.log(path.relative("/data/orandea/test", "/data/orandea/march"));
// создает абсолютный путь
console.log(path.resolve());
// нормализирует путь, приводить в правильный формат
console.log(path.normalize());
// расписывает путь
console.log(path.parse());
// соединяет пути
console.log(path.join());
