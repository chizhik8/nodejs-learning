console.log(process.execPath);
console.log(process.version);
console.log(process.platform);
console.log(process.arch);
console.log(process.title);
console.log(process.pid);
console.log(process.cwd());
console.log(process.argv);

process.on("exit", (code) => {
  console.log("Exit: " + code);
});

process.exit(1);

// Для работы с каталогами используются следующие функции:
// process.cwd()- возвращает текущий рабочий каталог,
// process.chdir() выполняет переход в другой каталог.
// Команда process.exit() завершает процесс с указанным в качестве аргумента
// кодом: 0 – успешный код, любое отличное от 0 число, но чаще всего 1 – код ошибки.

// Важный метод process.nextTick(fn) запланирует выполнение указанной функции таким образом,
//   что указанная функция будет выполнена после окончания текущей фазы(текущего исполняемого кода),
//   но перед началом следующей фазы event loop.
