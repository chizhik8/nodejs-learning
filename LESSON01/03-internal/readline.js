// интерактивный ввод в консоли по типу вопрос-ответ

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, // ввод из стандартного потока
  output: process.stdout, // вывод в стандартный поток
});

// Обработка каждой введенной строки происходит через событие line:
rl.on("line", (cmd) => {
  console.log(`You just typed: ${cmd}`);
  rl.pause();
  rl.close();
});

rl.question("Как вас зовут?  ", (answer) => {
  console.log(`Приятно познакомиться ${answer}`);
  console.log("Press any key and Enter!");
});

// Так же при какой-то длительной операции мы можем
// поставить разговор на паузу или другими словами заблокировать ввод:
// rl.pause();
// Чтобы закрыть интерфейсом readline необходимо выполнить функцию:
// rl.close();
