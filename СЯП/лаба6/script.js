// 1. Деструктуризация массива numbers
const numbers = [10, 20, 30, 40, 50];
const [y] = numbers;
console.log('Задача 1:', y); // 10


// 2. Spread оператор для объекта
const user = {
    name: 'Anna',
    age: 19
};

const admin = {
    admin: true,
    ...user
};
console.log('Задача 2:', admin);


// 3. Деструктуризация объекта store
let store = {
    state:{
    profilePage: {
    posts: [
        {id: 1, title: 'Hi', likesCount: 12},
        {id: 2, title: 'By', likesCount: 1},
    ],
    newPostText: 'About me',
},
    dialogsPage:{
    dialogs: [
        {id: 1, username: 'Valera'},
        {id: 2, username: 'Andrey'},
        {id: 3, username: 'Sasha'},
        {id: 4, username: 'Viktor'}
    ],
    messages: [
        {id: 1, text: 'hi'},
        {id: 2, text: 'hi hi'},
        {id: 3, text: 'hi hi hi'}
    ]
},
sidebar: [],
    },
}

const {
    profile: {
        name,
        age
    },
    posts,
    dialogs,
    messages
} = store;

console.log('Задача 3 - likesCount:');
posts.forEach(post => {
    console.log(`Post ${post.id}: ${post.likesCount} likes`);
});

const evenIdDialogs = dialogs.filter(dialog => dialog.id % 2 === 0);
console.log('Задача 3 - пользователи с четными id:', evenIdDialogs);

const updatedMessages = messages.map(message => ({
    ...message,
    text: 'Hello user'
}));
console.log('Задача 3 - обновленные сообщения:', updatedMessages);


// 4. Добавление новой задачи в массив
const tasks = [
    {id: 1, title: 'HTML&CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'ReactJS', isDone: false},
];

const newTask = {id: 4, title: 'C++', isDone: false};
const updatedTasks = [...tasks, newTask];
console.log('Задача 4 - обновленный массив задач:', updatedTasks);


// 5. Spread оператор для передачи массива в функцию
function sumValues(x, y, z) {
    return x + y + z;
}

const arr = [1, 2, 3];
const result = sumValues(...arr);
console.log('Задача 5 - сумма:', result); // 6