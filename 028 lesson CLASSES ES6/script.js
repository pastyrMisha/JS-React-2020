let name = "Ivan",
    age = 30,
    mail = 'ex@mail.ru';

// document.write('Пользователю ' + name + ' ' + age + ' лет. Его почтовый адрес: ' + mail);
document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);


//  // Используем var — получаем 3 раза 10 (в цикле повторно не создается переменная i)

// function makeArray () {
//     var items = [];

//     for (var i = 0; i < 10; i++) {
//         var item = function() {
//             console.log(i);
//         };
//         items.push(item);
//     }


//     return items;
// }

// var arr = makeArray();

// arr[1]();
// arr[3]();
// arr[7]();



// Используем let — получаем 1, 3, 7 (в цикле повторно создается переменная i 10 раз)

function makeArray () {
    let items = [];

    for (let i = 0; i < 10; i++) {
        let item = function() {
            console.log(i);
        };
        items.push(item);
    }
    
    return items;
}

let arr = makeArray();

arr[1]();
arr[3]();
arr[7]();


let fun = () => {
    console.log(this);
};

// fun();


//  У стрелочной ф-ии нет своего контекста, она всегда его берет у своего родителя

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    }
    show();
});




function calcOrDouble(number, basis = 2) {
    // basis = basis || 2; ES5
    console.log(number*basis);
}
calcOrDouble(3,5);
calcOrDouble(6);



// ----------------------------------------- Параметр по умолчанию width = 20


class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10);

console.log(square.calcArea());