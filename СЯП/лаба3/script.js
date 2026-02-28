// 1. Объединение вложенных массивов с помощью reduce()
const nestedArrays = [[1, 2], [3, 4], [5, [6, 7]]];
const flattenedOnce = nestedArrays.reduce((acc, val) => acc.concat(val), []);
console.log("1. Одноуровневое объединение:", flattenedOnce); // [1, 2, 3, 4, 5, [6, 7]]


// 2. Суммирование всех чисел в глубоко вложенном массиве
const deepArray = [1, [2, [3, [4]]]];
const sumDeep = arr => arr.flat(Infinity).reduce((sum, val) => sum + val, 0);
console.log("2. Сумма всех элементов:", sumDeep(deepArray)); // 10


// 3. Группировка студентов по номеру группы (только старше 17 лет)
function groupStudents(students) {
  return students.reduce((acc, student) => {
    if (student.age > 17) {
      acc[student.groupId] = acc[student.groupId] || [];
      acc[student.groupId].push(student);
    }
    return acc;
  }, {});
}
const students = [
  { name: 'Анна', age: 18, groupId: 1 },
  { name: 'Иван', age: 17, groupId: 1 },
  { name: 'Ольга', age: 19, groupId: 2 }
];
console.log("3. Группировка студентов:", groupStudents(students));


// 4. Перевод символов в ASCII, замена 7 на 1 и вычисление разницы
function asciiDiff(str) {
  const total1 = str.split('').map(c => c.charCodeAt(0)).join('');
  const total2 = total1.replace(/7/g, '1');
  return Number(total1) - Number(total2);
}
console.log("4. Разница ASCII:", asciiDiff('ABC')); // 656667 - 656661 = 6

4
// 5. Объединение объектов с сохранением первых значений
function extend(...objs) {
  return objs.reduce((acc, obj) => {
    for (let key in obj) {
      if (!(key in acc)) acc[key] = obj[key];
    }
    return acc;
  }, {});
}
console.log("5. Объединённый объект:", extend({a: 1, b: 2}, {c: 3}, {a: 3, d: 4}));
// Результат: {a: 1, b: 2, c: 3, d: 4}


// 6. Построение башни из символов "*"
function buildTower(n) {
  return Array.from({ length: n }, (_, i) => {
    const spaces = ' '.repeat(n - i - 1);
    const stars = '*'.repeat(i * 2 + 1);
    return spaces + stars + spaces;
  });
}
console.log("6. Башня:");
console.log(buildTower(3).join('\n'));
/*
  *  
 *** 
*****
*/