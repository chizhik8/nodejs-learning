/*
1. Ожидаем ответ true или false.
2. Требуется число. 
3. Целое.
4. Формирует набор входящих данных:
2008 -> true
2003 -> false
2000 -> true
1900 -> false
Проброс ошибки
2008.4 - "Число должно быть целым"
() -> "Аргумент не передан"
"2008" -> "Аргумент должен быть type Number"
"2000 год" -> "Аргумент должен быть type Number"
boolean -> "Аргумент должен быть type Number"
null -> "Аргумент должен быть type Number"
*/

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", ()=> {
    beforeAll(()=> console.log("Функция, срабатывает перед тестами"));

    afterAll(()=> console.log("Функция, срабатывает после тестов"));

    beforeEach(()=> console.log("Перед каждым тестом"));

    afterEach(()=> console.log("После каждого теста"));

    test("2008 - leap year", ()=>{
        expect(isLeapYear(2008)).toBe(true);
    });

    test("2003 - not leap year", ()=>{
        expect(isLeapYear(2003)).toBe(false);
    });

    test("2000 - leap year", ()=>{
        expect(isLeapYear(2000)).toBe(true);
    });

    test("1900 - not leap year", ()=>{
        expect(isLeapYear(1900)).toBe(false);
    });

    test("No argument", ()=>{
        expect(()=>isLeapYear()).toThrow("Аргумент не передан");
    });
})