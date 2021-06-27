"use strict";

function timer() {
  var deadline = '2021-10-21';

  var getTimeRemaining = function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / 1000 / 60 / 60 % 24),
        days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  },
      setClock = function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        updateClock = function updateClock() {
      var t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.hours < 10) {
        hours.textContent = "0" + t.hours;
      }

      if (t.minutes < 10) {
        minutes.textContent = "0" + t.minutes;
      }

      if (t.seconds < 10) {
        seconds.textContent = "0" + t.seconds;
      }

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    },
        timeInterval = setInterval(updateClock, 1000);
  };

  setClock('timer', deadline);
}

module.exports = timer;