'use strict';
// - фраза, директива, что мы пишем на стандарте ES6 (ограничение до IE9, но можно обойти)

// 003
// console.log(leftBorderWidth);

// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;

// / 003

// 004

// var number = 5;
// var string = "Hello!";
// var sym = Symbol();
// var boolean =true;
// null;
// undefined;
// var obj = {};

// console.log(4/0);
// console.log('string'*9);

// let something;
// console.log(something);

// let persone = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(persone['name']);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

// console.log(arr[0]);

// / 004

// 004 2

// null;       
// // // - манго, которого нет на столе 

// // undefined; 
// // // - существует, но не имеет никакого значения

// // let a;
// // console.log(a);

// const obj = {
//     name: 'Alex'
// }
// // - ключ, значение

// const arr = [1, 2, 3, 4]
            
// //             0   1  2  3
// // - массив спец. объект ключ 0 значение 1, ключ 3 значение 4

// // 1)
// console.log(typeof(String(null)));
// // 2)
// console.log(typeof("" + false));
// console.log('http://vk.com/catalog' + 5);

// // - to Number

// // 1)
// console.log(typeof(Number('5')));
// // 2)
// console.log(typeof(5 + +'5'));
// // 3)
// console.log(typeof(parseInt('15px', 10)));

// // let ans = +prompt("Hello?", '');

// // 0, '', null, undefined, NaN - это все всегда будет false, остальное true

// let switcher = null;

// if (switcher) {
//     console.log("Working...")
// }

// switcher = 1;

// if (switcher) {
//     console.log("Working...")
// }

// // 2)
// console.log(typeof(Boolean('5')));
// // 3)
// console.log(typeof(!!'5'));

// / 004 2

// 005

// alert("Hello World!");
// let answer = confirm("Are you here?");

// console.log(answer);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];


// let answer = prompt("Есть ли Вам 18?", "Да");

// console.log(typeof(arr));
// console.log(typeof(null)); 
// - Object это официальная ошибка JS, так как null - это отдельный тип данных

// / 005

// 006

// console.log(typeof("arr" + "- object"));
// console.log(typeof(4 + +"- object"));

// let answer = +prompt("Есть ли Вам 18?", "Да");

// console.log(typeof(answer));

// - тут везде унарный плюс, перед prompt или object - превращает все в численное значение


// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;
// // префиксная форма

// console.log(incr++);
// console.log(decr--);
// // постфиксная  форма

// console.log(5%2);

// = один раз это присваивание
// == это проверка на равенство
// === это строгое сравнение по типу данных
// console.log("2" === 2);

// let isChecked = true,
//     isClose = false;

//     console.log(isChecked || !isClose);

// a = 5;
// console.log(a); // a is not defined
// - в старом стандарте бы сработало - ошибка JS !!! (поэтому используем "use strict")

// / 006

// 007

// / 007