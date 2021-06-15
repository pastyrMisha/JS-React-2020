// Polyfill
// https://babeljs.io/docs/en/babel-polyfill/

// btn.addEventListener('click', function() {
//     alert("Что-то произошло");
// });

// let func1 = function(param, func2) {
//     func2(function(param, func3) {
//         func3(function(param, func4) {
//             func4(function(param, func5) {

//             });
//         });
//     });
// };

let drink = 0;

function shoot(arrow, headshot, fail) {
    console.log('Вы сделали выстрел...');
    
    setTimeout(function() {
        Math.random() > .5 ? headshot({}) : fail("Вы промахнулись");
    }, 1000);
};

function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function lose() {
    console.log('Вы проиграли!');
}

function buyBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам заплатили!');
}

shoot({}, 
        function(mark) {
            console.log('Вы попали в цель!');
            win(mark, buyBeer, giveMoney);
        },
        function(miss) {
            console.log(miss);
            lose();
        }
    )