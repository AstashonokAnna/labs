"use strict";

//1. Операторы  +, -, *, /. 
function basicOperation(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
       
    }
}

let result = basicOperation('+', 5, 10);    // result = 15
let result1 = basicOperation('-', 5, 10);   // result1 = -5
let result2 = basicOperation('*', 5, 10);   // result2 = 50
let result3 = basicOperation('/', 5, 10);   // result3 = 0.5

console.log(result, result1, result2, result3);


//2. Сумма кубов всех чисел
function sumOfCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 3;
  }
  return sum;
}

console.log(sumOfCubes(3)); // 1^3 + 2^3 + 3^3 = 36
console.log(sumOfCubes(5)); // 225


//3. Высчитать среднее арифметическое всех элементов массива
function average(arr) {
  if (arr.length === 0) return 0; 
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
}

console.log(average([1, 2, 3, 4, 5])); // 3
console.log(average([10, 20, 30]));  // 20
console.log(average([]));                 // 0


//4. Получить строку str и перевернуть
function reverseAlphabetOnly(str) {
  const onlyLetters = str.split('').filter(char => /[a-zA-Z]/.test(char));
  return onlyLetters.reverse().join('');
}

console.log(reverseAlphabetOnly("JavaScript"));       // "tpircSavaJ"
console.log(reverseAlphabetOnly("JavaScr53э? ipt"));  // "tpircSavaJ"


//5. Возвращаем строку s, повторяющуюся ровно n раз
function repeatString(n, s) {
  return s.repeat(n);
}

console.log(repeatString(3, "Hi"));     // "HiHiHi"
console.log(repeatString(0, "Hello"));  // ""
console.log(repeatString(5, "!"));      // "!!!!!"


//6. Возвращает массив arr3, которые содержит строки из arr1, но не входящие в arr2
function arrayDifference(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}

console.log(arrayDifference(["apple", "banana", "cherry"], ["banana", "kiwi"])); // ["apple", "cherry"]
console.log(arrayDifference(["dog", "cat", "bird"], ["cat", "dog"])); // ["bird"]