// let app = {
//     data: 45
// };
// console.log(app);

// let number = 1;






// // Инкапсуляция. Первый способ. Простой модуль - анонимная самовызывающаяся функция:

// (function() {
//     let number = 2;
//     console.log(number);

//     return console.log(number + 3);
// }());

// console.log(number);


// Инкапсуляция. Второй способ:

// let user = (function(){
//     let private = function() {
//         console.log('I am privat');
//     }
//     return {
//         sayHello: function() {
//             console.log('Hello');
//         }
//     };
// }());

// console.log(user);
// console.log(user.sayHello());

// Инкапсуляция. Третий способ:

let user = (function(){
    let private = function() {
        console.log('I am privat');
    }
    let sayHello = function() {
        console.log('Hello');
    }
    return {
        sayHello: sayHello
        };
}());

console.log(user);
console.log(user.sayHello());