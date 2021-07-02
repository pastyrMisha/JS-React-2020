// Mocha — нужна, чтобы сами тесты работали, это основа
// Chai — Это дополнение к ней, которое добавляет полезные функции для проверок, причем, в трех разных стилях


function sayName(name) {
    let message = "My name is " + name;
    return message
}

let arr = [5, -3, 6, -5, 0, -7, 8, 10] // заменили 9 на 10 и ошибка в проверке 2) assert.equal(result, 13)
let result = arr.reduce(function(sum,elem) {
    return sum + elem;
});

let assert = require('chai').assert

describe("sayName", function() {

    it("Получаем фразу с новым именем", function(){
        assert.typeOf(sayName("Alex"), 'string')
    });
});
describe("arr", function() {

    it("Получаем сумму чисел массива", function() {
        assert.equal(result, 13)
    });
});