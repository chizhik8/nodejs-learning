// модуль colors (npm), который позволяет раскрашивать текст в
// консоли в разнообразные цвета
// модуль commander (npm), это полноценное решение для создания интерфейсов командной строки

const readline = require("readline");
const fs = require("fs").promises;
const { program } = require("commander");
require("colors");

program.option(
  "-f, --file [type]",
  "file for saving game results",
  "results.txt"
);
program.parse(process.argv);

// Дальше мы выполняем инициализацию модуля readline.
// Вводим три переменные которые мы будем в дальнейшем
// использовать: count - это подсчет количества попыток которые понадобились,
// чтобы угадать число, logFile - имя файла куда будут сохранены результаты игры,
// mind - это случайное число от 1 до 10, которое необходимо отгадать.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
const logFile = program.opts().file;
const mind = Math.floor(Math.random() * 10) + 1;

// Функция isValid отвечает за валидацию введенных значений в консоли,
// она проверяет, чтобы введенное значение было именно числом и лежало
// в диапазоне от 1 до 10. Если данные валидны,
// то функция возвращает истину, если нет - ложь

const isValid = (value) => {
  if (isNaN(value)) {
    console.log("Введите число!".red);
    return false;
  }
  if (value < 1 || value > 10) {
    console.log("Число должно быть в диапазоне 1 до 10".red);
    return false;
  }
  return true;
};

// Функция log отвечает за сохранение результатов игры.
// Она использует функцию appendFile модуля fs для записи данных.
// Если файл существует то результаты будут дописаны в существующий файл,
// если файла нет - он будет создан.Обратите внимание, что функция асинхронная
// и мы ожидаем выполнения операции сохранения результатов.

const log = async (data) => {
  try {
    await fs.appendFile(logFile, `${data}\n`);
    console.log(`Удалось сохранить результат в файл ${logFile}`.green);
  } catch (err) {
    console.log(`Не удалось сохранить файл ${logFile}`.red);
  }
};

// Основная функция это функции игры game(),
// которая вызывает себя рекурсивно до тех пор пока мы не угадаем задуманное число.
const game = () => {
  rl.question(
    "Введите число от 1 до 10, чтобы угадать задуманное: ".yellow,
    (value) => {
      let a = +value;
      if (!isValid(a)) {
        game();
        return;
      }
      count += 1;
      if (a === mind) {
        console.log("Поздравляю Вы угадали число за %d шага(ов)".green, count);
        log(
          `${new Date().toLocaleDateString()}: Поздравляю Вы угадали число за ${count} шага(ов)`
        ).finally(() => rl.close());
        return;
      }
      console.log("Вы не угадали еще попытка".red);
      game();
    }
  );
};

game();
