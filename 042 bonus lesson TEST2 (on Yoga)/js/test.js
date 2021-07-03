describe("Таймер", function() {
    it("Возвращает ли фунция объект?", function() {
        assert.typeOf(getTimeRemaining(), 'object') //изменим на 'string' и получим ошибку
    });

    it('Устанавливаем таймер обратного отсчета', function() {
        assert.typeOf(setClock('timer', deadline), 'string');
    })  
});

describe("Общая сумма",  function() {
    it("Изначально равен 0", function() {
        assert.equal(totalValue.innerHTML, 0);
    })
});
