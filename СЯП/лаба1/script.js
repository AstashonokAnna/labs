"use strict";

// 1. Типы переменных
function checkTypes() {
  let a = 5;
  let name = "Name";
  let i = 0;
  let double = 0.23;
  let result = 1 / 0;
  let answer = true;
  let no = null;

  console.log("1. Типы переменных:");
  console.log(typeof a);       // number
  console.log(typeof name);    // string
  console.log(typeof i);       // number
  console.log(typeof double);  // number
  console.log(typeof result);  // number
  console.log(typeof answer);  // boolean
  console.log(typeof no);      // object
}



// 2. Сколько квадратов поместится в прямоугольник
function squareCount() {
  let rectWidth = 45;
  let rectHeight = 21;
  let squareSize = 5;
  let totalSquares = Math.floor(rectWidth / squareSize) * Math.floor(rectHeight / squareSize);
  console.log("2. Квадраты в прямоугольнике:");
  console.log(`Всего квадратов размером ${squareSize}мм: ${totalSquares}`);
}



// 3. Сравнение переменных a и b
function compareAB() {
  let i = 2;
  let a = ++i;
  let b = i++;
  console.log("3. Сравнение переменных:");
  console.log("a:", a);
  console.log("b:", b);
  console.log("i после операций:", i);
  console.log("a === b:", a === b ? "true — значения равны" : "false — значения разные");
}



// 4. Сравнение разных значений с тернарным оператором
console.log("4.Сравнение разных значений с тернарным оператором");
console.log("Котик" == "котик" ? "true — одинаковые символы, но разный регистр" : "false — регистр имеет значение");
console.log("Котик" == "китик" ? "true — совпадают" : "false — разные буквы");
console.log("Кот" == "Котик" ? "true — совпадают" : "false — разная длина");
console.log("Привет" == "Пока" ? "true — совпадают" : "false — разные слова");
console.log(73 == "53" ? "true — значения равны" : "false — число и строка разные");
console.log(false == 0 ? "true — оба приводятся к false" : "false — разные типы");
console.log(54 == true ? "true — 54 приводится к true" : "false — true это 1, 54 не равно 1");
console.log(123 == false ? "true — 123 приводится к true" : "false — false это 0, 123 не равно 0");
console.log(true == "3" ? "true — '3' приводится к true" : "false — true это 1, '3' не равно 1");
console.log(3 == "5мм" ? "true — значения равны" : "false — '5мм' не преобразуется в число");
console.log(8 == "-2" ? "true — значения равны" : "false — 8 не равно -2");
console.log(34 == "34" ? "true — строка преобразуется в число" : "false — значения разные");
console.log(null == undefined ? "true — особое правило: равны при нестрогом сравнении" : "false — разные типы");



// 5. Проверка имени пользователя
let inputName = prompt("5. Введите имя:");
let dbName = "анна"; // имя преподавателя

if (!inputName) {
  console.log("Ошибка: имя не введено");
} else {
  let normalizedInput = inputName.toLowerCase();
  if (normalizedInput.includes(dbName)) {
    console.log(`Привет, ${inputName}`);
    console.log("Введенные данные верные");
  } else {
    console.log("Нет доступа");
    console.log("Имя не найдено");
  }
}



// 6. Студент и экзамены
function examStatus() {
  let russian = confirm("Сдал русский?");
  let math = confirm("Сдал математику?");
  let english = confirm("Сдал английский?");

  console.log("6. Статус студента:");
  if (russian && math && english) {
    console.log("Перевод на следующий курс");
  } else if (!russian && !math && !english) {
    console.log("Отчисление");
  } else {
    console.log("Пересдача");
  }
}



// 7. Арифметика и типы
function typeOperations() {
  console.log("7. Арифметические операции:");
  console.log("true + true =", true + true);
  console.log("0 + '5' =", 0 + "5");
  console.log("5 + 'мм' =", 5 + "мм");
  console.log("8 / Infinity =", 8 / Infinity);
  console.log("9 * '\\n9' =", 9 * "\n9");
  console.log("null - 1 =", null - 1);
  console.log("'5' - 2 =", "5" - 2);
  console.log("'5px' - 3 =", "5px" - 3);
  console.log("true - 3 =", true - 3);
  console.log("7 || 0 =", 7 || 0);
}



// 8. Массив: чётные +2, нечётные → строка
function transformNumbers() {
  const result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(i % 2 === 0 ? i + 2 : `${i}мм`);
  }
  console.log("8. Преобразование чисел:", result);
}



// 9. День недели через массив и объект
function dayOfWeek() {
  const daysArray = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const daysObject = {
    1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'
  };
  const userInput = parseInt(prompt("Введите номер дня недели (1-7):"));
  if (userInput >= 1 && userInput <= 7) {
    console.log("9. День недели:");
    console.log("Через массив:", daysArray[userInput - 1]);
    console.log("Через объект:", daysObject[userInput]);
  } else {
    console.log("Ошибка: введите число от 1 до 7");
  }
}



// 10. Функция с параметрами
function combineParams(param1 = 'по умолчанию', param2, param3) {
  return `${param1}, ${param2}, ${param3}`;
}
function testCombineParams() {
  const userInput = prompt("Введите третий параметр:");
  const result = combineParams(undefined, 'второй параметр', userInput); 
  console.log("10. Комбинированные параметры:", result);
}



// 11. Проверка сторон фигуры
function paramsDeclaration(a, b) {
  return a === b ? 4 * a : a * b;
}
const paramsExpression = function(a, b) {
  return a === b ? 4 * a : a * b;
};
const paramsArrow = (a, b) => a === b ? 4 * a : a * b;

function testParamsFunctions() {
  console.log("11. Проверка фигуры:");
  console.log("Declaration:", paramsDeclaration(5, 5));
  console.log("Expression:", paramsExpression(4, 6));
  console.log("Arrow:", paramsArrow(7, 7));
}



//  Запуск всех функций
checkTypes();
squareCount();
compareAB();
typeOperations();
transformNumbers();
dayOfWeek();
testCombineParams();
testParamsFunctions();
examStatus();