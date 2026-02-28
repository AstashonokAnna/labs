// 1. Прототипное наследование
function Figure(type, color, size, lines = 0) {
    this.type = type; 
    this.color = color; 
    this.size = size;   
    this.lines = lines; 
}

const circle = new Figure("circle", "white", "big");
const greenCircle = Object.create(circle);
greenCircle.color = "green"; 

const triangle = new Figure("triangle", "white", "big", "1");
const triangleWithLines = Object.create(triangle);
triangleWithLines.lines = 3; 

const square = new Figure("square", "yellow", "small");

console.log("Свойства зеленого круга:", Object.keys(greenCircle));
console.log("Свойства треугольника с тремя линиями:", Object.keys(triangleWithLines));
console.log("Есть ли у маленького квадрата собственное свойство 'color'?", square.hasOwnProperty("color"));


// Задача 2. Иерархия классов 
class Human {
    constructor(firstName, lastName, birthYear, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.address = address;
    }

    get age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    set age(newAge) {
        const currentYear = new Date().getFullYear();
        this.birthYear = currentYear - newAge;
    }

    setAddress(newAddress) {
        this.address = newAddress;
    }
}

class Student extends Human {
    constructor(firstName, lastName, birthYear, address, faculty, course, group, recordBook) {
        super(firstName, lastName, birthYear, address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.recordBook = recordBook; 
    }

    setCourse(newCourse) {
        this.course = newCourse;
    }

    setGroup(newGroup) {
        this.group = newGroup;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getSpeciality() {
        const specialityCode = this.recordBook.toString()[1];
        switch (specialityCode) {
            case "1": return "ПОИТ";
            case "2": return "ИСИТ";
            case "3": return "ДЭВИ";
            case "4": return "ПОИБМС";
            default: return "Неизвестно";
        }
    }
}

class Faculty {
    constructor(name, groupsCount, studentsCount) {
        this.name = name;
        this.groupsCount = groupsCount;
        this.studentsCount = studentsCount;
        this.students = []; 
    }

    addStudent(student) {
        this.students.push(student);
        this.studentsCount++;
    }

    setGroupsCount(newCount) {
        this.groupsCount = newCount;
    }

    setStudentsCount(newCount) {
        this.studentsCount = newCount;
    }

    getDev() {
        return this.students.filter(st => st.getSpeciality() === "ДЭВИ").length;
    }

    getGroupe(groupName) {
        return this.students.filter(st => st.group === groupName);
    }
}

const student1 = new Student("Анна", "Асташонок", 2003, "Минск", "ФИТ", 2, "201", 71201300);
const student2 = new Student("Вероника", "Шелест", 2004, "Минск", "ФИТ", 1, "202", 73202301);

const facultyFIT = new Faculty("ФИТ", 10, 0);
facultyFIT.addStudent(student1);
facultyFIT.addStudent(student2);

console.log(student1.getFullName());
console.log("Возраст студента:", student1.age);
console.log("Специальность:", student1.getSpeciality());
console.log("Количество студентов ДЭВИ:", facultyFIT.getDev());
console.log("Студенты группы 201:", facultyFIT.getGroupe("201"));