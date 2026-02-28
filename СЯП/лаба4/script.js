// 1. Управление товарами с использованием Set
let MySet = new Set(["Молоко","Хлеб","Яблоки","Сыр","Кофе"]);

function AddElements(MySet,...Elements)
{
    for (let i = 0; i < Elements.length; i++) {
        MySet.add(Elements[i]);
    }
    console.log(MySet);
}

function DeleteElements(MySet,...Elements)
{
    for (let i = 0; i < Elements.length; i++) {
        MySet.delete(Elements[i]);
    }
    console.log(MySet);
}

function IsElementHere(MySet,...Elements)
{
    for (let i = 0; i < Elements.length; i++) {
        if (MySet.has(Elements[i])) {
            console.log("Элемент "+Elements[i]+" -есть");
        }
        else{
            console.log("Элемент "+Elements[i]+" -нет");
        }
    }
}

function AmountOfElements(MySet)
{
    console.log("Количество товаров: "+MySet.size);
}

AddElements(MySet,"Масло","Сахар","Молоко","Яблоки");
DeleteElements(MySet,"Масло","Сахар","Молоко","Яблоки");
IsElementHere(MySet,"Масло","Сахар","Кофе","Хлеб");
AmountOfElements(MySet);



// 2. Управление студентами с использованием Set
let MySecondSet = new Set();

let Student1 = {IDNumber:101,GroupNumber:1,FIO:"Иванов Иван Иванович"};
let Student2 = {IDNumber:102,GroupNumber:2,FIO:"Петров Петр Петрович"};
let Student3 = {IDNumber:103,GroupNumber:1,FIO:"Иванова Мария Александровна"};
let Student4 = {IDNumber:104,GroupNumber:2,FIO:"Асташонок Анна Петровна"};

function NewStudent(MySecondSet,...Elements) {
    for (let i = 0; i < Elements.length; i++) {
        MySecondSet.add(Elements[i]);
    }
}

function OtchislenieStudent(MySecondSet,StudentID)
{
    for (let Student of MySecondSet) {
        if (Student.IDNumber===StudentID) {
            MySecondSet.delete(Student);
        }
    }
}

function StudentsFilterByGroup(MySecondSet,GroupNumber) {
    let OnlyOneGroupStudents = [...MySecondSet].filter(Student => Student.GroupNumber == GroupNumber);
    return new Set(OnlyOneGroupStudents);
}

function StudentsSortByIDNumber(MySecondSet) {
    let SortedStudents = [...MySecondSet].sort((a, b) => a.IDNumber - b.IDNumber);
    return new Set(SortedStudents)
}

NewStudent(MySecondSet,Student1,Student2,Student3,Student4);
console.log("Все студенты:", MySecondSet);

OtchislenieStudent(MySecondSet,103);
console.log("После отчисления:", MySecondSet);

let filteredStudents = StudentsFilterByGroup(MySecondSet,2);
console.log("Студенты группы 2:", filteredStudents);

let sortedStudents = StudentsSortByIDNumber(MySecondSet);
console.log("Отсортированные студенты:", sortedStudents);



// 3. Хранилище товаров с использованием Map
let MYMap = new Map([
    [ 1,  {Name:"Ноутбук",Amount:5,Price:50000}],
    [ 2,  {Name:"Мышь",Amount:10,Price:800}],
    [ 3,  {Name:"Клавиатура",Amount:8,Price:2500}],
    [ 4,  {Name:"Монитор",Amount:3,Price:15000}],
]);

function AddGoods(MYMap,ElementID,Element) {
    MYMap.set(ElementID,Element);
    console.log("Товар добавлен!");
}

function DeleteGoodsByID(MYMap,...ElementID) {
    for (let i = 0; i < ElementID.length; i++) {
        MYMap.delete(ElementID[i]);
    }
}

function DeleteGoodsByGoods(MYMap,...GoodsName) {
    for (let Name of GoodsName) {
        for (let [elementID,element] of MYMap) {
             if (element.Name===Name) {
                 MYMap.delete(elementID);
            }
        }
    }
}

function GoodsAmountChanger(MYMap,...Goods) {
    for (let [ElementID,NewElementAmount] of Goods) {
        if (MYMap.has(ElementID)) {
            let element = MYMap.get(ElementID);
            element.Amount = NewElementAmount;
            MYMap.set(ElementID, element);
        }   
    }
}

function GoodsPriceChanger(MYMap,...Goods) {
    for (let [ElementID,NewElementPrice] of Goods) {
        if (MYMap.has(ElementID)) {
            let element = MYMap.get(ElementID);
            element.Price = NewElementPrice;
            MYMap.set(ElementID, element);
        }   
    }
}

function AllPriceAndAmount(MYMap) {
    let AllAmount=0;
    let AllPrice=0;
    for (let element of MYMap.values()) {
        AllAmount+=element.Amount;
        AllPrice+=element.Price * element.Amount;
    }
    console.log("Всего товаров: "+AllAmount);
    console.log("Общая стоимость: "+AllPrice);
}

console.log("Исходные товары:", MYMap);
AddGoods(MYMap,5,{Name:"Наушники",Amount:15,Price:3000});
DeleteGoodsByID(MYMap,1,2);
DeleteGoodsByGoods(MYMap,"Клавиатура");
GoodsAmountChanger(MYMap,[4,5]);
GoodsPriceChanger(MYMap,[4,12000]);
AllPriceAndAmount(MYMap);
console.log("После изменений:", MYMap);



// 4. Кеширование с использованием WeakMap
let MyWorkingCache = new WeakMap();

let FirstObject = { number: 5 };
let SecondObject = { number: 10 };

function Caching(Object, MyFunction) {
    if (MyWorkingCache.has(Object)) {
        console.log('Берем из кэша!');
        return MyWorkingCache.get(Object);
    } 
    else {
        console.log('Вычисляем...');
        let Result = MyFunction(Object);
        MyWorkingCache.set(Object, Result);
        return Result;
    }
}

function MyFunction(Object) {
    return Object.number * 2;
}

console.log(Caching(FirstObject, MyFunction));
console.log(Caching(SecondObject, MyFunction));
console.log(Caching(FirstObject, MyFunction));
console.log(Caching(SecondObject, MyFunction));