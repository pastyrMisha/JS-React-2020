"use strict";

function calc() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total');
  totalValue.innerHTML = 0;

  function calc() {
    var multiplier = place.options[place.selectedIndex].value,
        personsValue = +persons.value,
        restDaysValue = +restDays.value;

    if (+personsValue > 0 && +restDaysValue > 0) {
      totalValue.innerHTML = (personsValue + restDaysValue) * 4000 * multiplier;
    } else {
      totalValue.innerHTML = 0;
    }
  }

  ;
  persons.addEventListener('change', function () {
    return calc();
  });
  restDays.addEventListener('change', function () {
    return calc();
  });
  place.addEventListener('change', function () {
    return calc();
  });
}

module.exports = calc;