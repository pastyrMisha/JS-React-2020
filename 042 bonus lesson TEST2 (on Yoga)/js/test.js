describe("Таймер", function() {
    it("Возвращает ли фунция объект?", function() {
        assert.typeOf(getTimeRemaining(), 'object')
    })
});
