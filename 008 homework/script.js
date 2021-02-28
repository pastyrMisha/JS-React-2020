'use strict';
// Homework
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        saving: false
    };

let answer1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    answer2 = prompt('Во сколько обойдется?', ''),
    answer3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    answer4 = prompt('Во сколько обойдется?', '');

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;

// console.log(appData.budget);
// console.log(appData.timeData);
// console.log(appData.expenses);


alert(appData.budget / 30);

// / Homework