// 1. Объект person
const person = {
  name: "Анна",
  age: 19,
  greet() {
    return `Привет, меня зовут ${this.name}!`;
  },
  ageAfterYears(years) {
    return this.age + years;
  }
};

console.log("1:", person.greet());
console.log("1:", person.ageAfterYears(5));


// 2. Объект car
const car = {
  model: "Lamborghini Urus S",
  year: 2023,
  getInfo() {
    return `Модель: ${this.model}, Год выпуска: ${this.year}`;
  }
};

console.log("2:", car.getInfo());


// 3. Конструктор Book
function Book(title, author) {
  this.title = title;
  this.author = author;
  
  this.getTitle = function() {
    return this.title;
  };
  
  this.getAuthor = function() {
    return this.author;
  };
}

const book1 = new Book("Война и мир", "Лев Толстой");
console.log("3:", book1.getTitle(), "-", book1.getAuthor());


// 4. Объект team
const team = {
  players: [
    { name: "Александр", position: "нападающий" },
    { name: "Дмитрий", position: "защитник" },
    { name: "Виктор", position: "вратарь" }
  ],
  showPlayers() {
    const self = this; 
    this.players.forEach(function(player) {
      console.log(`4: Игрок: ${player.name}, Позиция: ${player.position}`);
    }.bind(this)); 
  }
};

team.showPlayers();


// 5. Модуль counter
const counter = (function() {
  let count = 0;
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
})();

console.log("5:", counter.increment()); // 1
console.log("5:", counter.increment()); // 2
console.log("5:", counter.decrement()); // 1
console.log("5:", counter.getCount());  // 1


// 6. Объект item с изменяемыми и неизменяемыми свойствами
const item = {};
Object.defineProperty(item, 'price', {
  value: 100,
  writable: true,
  configurable: true,
  enumerable: true
});

console.log("6 до изменения:", item.price);
item.price = 150; 
console.log("6 после изменения:", item.price);

Object.defineProperty(item, 'price', {
  writable: false,
  configurable: false
});


// 7. Объект circle с геттером и сеттером
const circle = {
  _radius: 5,
  
  get area() {
    return Math.PI * this._radius * this._radius;
  },
  
  get radius() {
    return this._radius;
  },
  
  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      console.log("7: Радиус должен быть положительным числом");
    }
  }
};

console.log("7: Радиус:", circle.radius);
console.log("7: Площадь:", circle.area);
circle.radius = 10;
console.log("7: Новый радиус:", circle.radius);
console.log("7: Новая площадь:", circle.area);


// 8. Объект car с неизменяемыми свойствами
const car2 = {
  make: "Lamborghini",
  model: "Urus S",
  year: 2023
};

Object.defineProperty(car2, 'make', { writable: false, configurable: false });
Object.defineProperty(car2, 'model', { writable: false, configurable: false });
Object.defineProperty(car2, 'year', { writable: false, configurable: false });

console.log("8:", car2.make, car2.model, car2.year);


// 9. Массив с геттером sum
const numbers = [1, 2, 3];

Object.defineProperty(numbers, 'sum', {
  get() {
    return this.reduce((acc, curr) => acc + curr, 0);
  },
  enumerable: false,
  configurable: false
});

console.log("9: Сумма элементов:", numbers.sum);


// 10. Объект rectangle с геттерами и сеттерами
const rectangle = {
  _width: 10,
  _height: 5,
  
  get area() {
    return this._width * this._height;
  },
  
  get width() {
    return this._width;
  },
  
  set width(value) {
    if (value > 0) {
      this._width = value;
    } else {
      console.log("10: Ширина должна быть положительным числом");
    }
  },
  
  get height() {
    return this._height;
  },
  
  set height(value) {
    if (value > 0) {
      this._height = value;
    } else {
      console.log("10: Высота должна быть положительным числом");
    }
  }
};

console.log("10: Ширина:", rectangle.width);
console.log("10: Высота:", rectangle.height);
console.log("10: Площадь:", rectangle.area);

rectangle.width = 15;
rectangle.height = 8;
console.log("10: Новая площадь:", rectangle.area);


// 11. Объект user с геттером и сеттером для полного имени
const user = {
  firstName: "Анна",
  lastName: "Асташонок",
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  set fullName(value) {
    const parts = value.split(' ');
    if (parts.length === 2) {
      this.firstName = parts[0];
      this.lastName = parts[1];
    } else {
      console.log("11: Введите имя и фамилию через пробел");
    }
  }
};

console.log("11: Полное имя:", user.fullName);
user.fullName = "Вероника Асташонок";
console.log("11: Новое полное имя:", user.fullName);
console.log("11: Имя:", user.firstName, "Фамилия:", user.lastName);