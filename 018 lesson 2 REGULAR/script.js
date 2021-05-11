// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.touches[0].target);
    //     console.log(e.touches);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    //     });

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log("Red box: "  + e.touches[0].pageX);
    });

    // box.addEventListener('touchend', function(e) {
    //     e.preventDefault();
    //     console.log("Red box: touchend");
    // });


    // REGULAR:

    // new RegExp('pattern', 'flags');
    // /pattern/

    // let ans = prompt('Введите ваше имя');

    // let reg = /n/ig;

    // // console.log(ans.search(reg));
    // console.log(ans.match(reg));
    // console.log(reg.test(ans));

    // i -это флаг, что не зависит от регистра (не обращать внимание)
    // g - это флаг, глобальности ищем не только первое вхождение, но и все остальные вхождения
    // m - это флаг, многострочности

    // \d - искать цифры
    // \w - искать буквы
    // \s - искать пробелы

    // \D - искать не цифры
    // \W - искать не буквы
    // \S - искать не пробелы


    // let pass = prompt('Введите пароль');

    // console.log(pass.replace(/./g, "*"));
    // alert('12-34-56'.replace(/-/g, ':'));

    // let ans = prompt('Введите число');

    // let reg = /\d/g;

    // console.log(ans.match(reg));


    let str = 'My name is/ R2D2';

    // console.log(str.match(/\w\d\w\d/i));
    // console.log(str.match(/\//i));
    console.log(str.match(/ /i));
});
