// // 1.1. Два независимых счётчика
// function makeCounter() {
//   let currentCount = 1; 

//   return function() { 
//     return currentCount++; 
//   };
// }

// let counter = makeCounter(); 

// alert(counter()); //1
// alert(counter()); //2
// alert(counter()); //3

// let counter2 = makeCounter(); 

// alert(counter2()); //1

// // 1.2. Один счётчик, одно замыкание
//  let currentCount = 1; 

// function makeSingleCounter() {

//   return function() {
//     return currentCount++; 
//   };
// }

// let counter3  = makeSingleCounter(); 
// let counter4  = makeSingleCounter(); 

// alert(counter3()); //1
// alert(counter3()); //2

// alert(counter4()); //3
// alert(counter4()); //4


// // 2. Каррированная функция объема параллелепипеда
// function volume(length) {
//   return function(width) {
//     return function(height) {
//       return length * width * height;
//     };
//   };
// }

// const fixedLength = volume(5);

// console.log("Объем 5x2x3:", fixedLength(2)(3)); // 30
// console.log("Объем 5x4x1:", fixedLength(4)(1)); // 20


// 3. Генератор движения объекта
function* moveObject(startX = 0, startY = 0) {
  let x = startX, y = startY;

  while (true) {
    const direction = prompt("Введите команду (left, right, up, down):");

    if (!['left', 'right', 'up', 'down'].includes(direction)) {
      console.log("Неверная команда. Попробуйте снова.");
      continue; 
    }

    for (let i = 0; i < 10; i++) {
      switch (direction) {
        case 'left':  x--; break;
        case 'right': x++; break;
        case 'up':    y++; break;
        case 'down':  y--; break;
      }

      console.log(`Шаг ${i + 1}: координаты (${x}, ${y})`);

      yield { x, y }; //возвращает координаты после каждого шага
    }
  }
}
start= moveObject();
start.next();

// // 4. Глобальный объект window
// var globalVar = "начальное значение";
// function globalFunc() {
//   return "Привет глобальная функция";
// }

// console.log("window.globalVar:", window.globalVar); 
// console.log("window.globalFunc():", window.globalFunc()); 

// window.globalVar = "переопределено через window";
// console.log("globalVar после переопределения:", globalVar); 

// window.newGlobal = 123;
// console.log("window.newGlobal:", window.newGlobal); // 123