let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');





    let money, time;

function start() { 
    while(isNaN(money) || money == "" || money == null) {

        money = prompt("Ваш бюджет на месяц?", "");

    }
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
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


            let items;
            let dop;
            while(!isNaN(items) == true || items == "" || items == null) {

             items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            };
            
            while(!isNaN(dop) == true || dop == "" || dop == null) {
                dop = prompt('Может что-то еще?', '');
            };

            appData.income = items.split(',');
            // appData.income = appData.income.map(item => item.trim()); убрать пробелы!!!!!
            appData.income.push(dop);
            appData.income.sort();

            let str = "Способы доп. заработка: \n";


            // for(let i = 0; i < this.income.length; i++){
            //     str = str + `${i+1}: ${this.income[i]}\n`;
            // }



            this.income.forEach((item, i) => {

                str += `${i+1}: ${item}\n`;
            })
         


            alert(str);

        }
      
    };
    appData.chooseExpenses();
    appData.detectDayBudget();
    appData.detectLevel();
    appData.checkSavings();
    appData.chooseOptExpenses();
    appData.chooseIncome();


    for(let key in appData){
        if(typeof appData[key] !== "function") {
            console.log(key + ": " );
            console.log(appData[key]);
        };
    }

    // Object.entries(appData).forEach(([k, v]) => {
    //     if(typeof v !== "function") {
    //         console.log(k + ": " +v)
    //     };
    // })

