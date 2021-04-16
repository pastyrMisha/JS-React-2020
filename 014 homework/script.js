
'use strict';


let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
<<<<<<< HEAD
        money = +prompt("Ваш бюджет на месяц?", "");
=======
        money = prompt("Ваш бюджет на месяц?");
>>>>>>> d726ac0c10eac2550ebc5de000d6f81ddb853591
    }
}
start();




let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function() {
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
        },
        detectDayBudget: function() {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert("Ежедневный бюджет: " + appData.moneyPerDay);
        },
        detectLevel: function() {
            if(appData.moneyPerDay < 100) {
                console.log("Минимальный уровень достатка");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log("Средний уровень достатка");
            } else if (appData.moneyPerDay > 2000) {
                console.log("Высокий уровень достатка");
            } else {
                console.log("Произошла ошибка");
            }
        },
        checkSavings: function() {
            if(appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?"),
                    persent = +prompt("Под какой процент?");
        
                appData.monthInCome = save/100/12*persent;
                alert("Доход в месяц с вашего депозита: " + appData.monthInCome);
            }
        },
        chooseOptExpenses: function() {
            for (let i = 1; i < 3; i++) {
                let opt = prompt("Статья необязательных расходов?")
                appData.optionalExpenses[i] = opt;
            }
        },
        chooseIncome: function() {
<<<<<<< HEAD
            // while((typeof(items)) === 'string' || items == "" || items == null) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
=======

            let items;
            let dop;
            while(!isNaN(items) == true || items == "" || items == null) {

             items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            };
            while(!isNaN(dop) == true || dop == "" || dop == null) {
                dop = prompt('Может что-то еще?', '');
            };
>>>>>>> d726ac0c10eac2550ebc5de000d6f81ddb853591
            appData.income = items.split(', ');
            appData.income.push(dop);
            appData.income.sort();
<<<<<<< HEAD
            // }
=======

>>>>>>> d726ac0c10eac2550ebc5de000d6f81ddb853591
        }
      
    };
