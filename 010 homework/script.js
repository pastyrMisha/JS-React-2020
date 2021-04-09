'use strict';


let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();




let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };

function chooseExpenses() {
for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '')

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        i = i - 1;
    }
}
}
chooseExpenses();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

function detectDayBudget() {
appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay);

detectLevel();
};
detectDayBudget();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");

        appData.monthInCome = save/100/12*persent;
        alert("Доход в месяц с вашего депозита: " + appData.monthInCome);
    }
}
checkSavings();

let optional;

function chooseOptExpenses() {
    for (let n = 1; n < 4; n++) {
        optional = prompt("Статья необязательных расходов?")

        if ((typeof(optional)) === 'string' && (typeof(optional)) != null && optional != '' && optional.length < 50) {
            appData.optionalExpenses[n] = optional;
    } else {
        n = n - 1;
    }
    }
}
chooseOptExpenses();

