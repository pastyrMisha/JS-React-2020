// замыкание функции

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);


// 'use strict' когда ф-ия не находит что-то в своем контексте, то выдает undefined
//     'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);
// showThis(5, 5);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

//  1) Просто вызов функции — window/undefined
// 2) Метод объекта — this = объект
// 3) Конструктор (new) — this = новый созданный объект
// 4) Указание конкретного контекста — call, apply, bind

// let user = {
//     name: "John"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith')); // call — можно передать параметром только строку
// console.log(sayName.apply(user, ['Snow'])); // apply — можно передать параметром массив

// function count(number) {
    
//     return this * number;
    
// }

// let double = count.bind(2); // bind — жесткий метод привязки контекста. Часто используется в React
// console.log(double(3));
// console.log(double(10));

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
})