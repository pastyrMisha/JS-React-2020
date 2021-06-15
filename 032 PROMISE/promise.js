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