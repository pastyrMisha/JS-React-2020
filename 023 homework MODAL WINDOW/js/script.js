window.addEventListener('DOMContentLoaded', function () {

    'use strict'

// Tabs

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })

// Timer

let deadline = '2021-10-21';
    
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            // hours = Math.floor((t/(1000*60*60))); если часами таймер закончится
            hours = Math.floor((t/1000/60/60) % 24),
            days = Math.floor((t/(1000*60*60*24)));

            return {
              total : t,
              days : days,
              hours : hours,
              minutes : minutes,
              seconds : seconds
            };
    }


    function setClock(id, endtime) {

        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            
            if(t.hours < 10) {
                hours.textContent = "0" + t.hours; 
            } if(t.minutes < 10) {
                minutes.textContent = "0" + t.minutes;
            } if (t.seconds < 10) {
                seconds.textContent = "0" + t.seconds;
            } if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    };

    setClock('timer', deadline);



// рабочая реализация с https://tv-remservis.ru/

// window.addEventListener("DOMContentLoaded", () => {
//     let deadLine = Date.parse('Mar 13 2021 00:00:00 GMT+0300');
//     while (deadLine < Date.parse(new Date())) {
//         deadLine += 86400000;
//     }

//     function getTimeRemaining(endtime) {
//         let t = endtime - Date.parse(new Date());
//         seconds = Math.floor((t/1000) % 60),
//         minutes = Math.floor((t/1000/60) % 60),
//         hours = Math.floor((t/1000/60/60) % 24);

//         return {
//             'total' : t,
//             'hours' : hours,
//             'minutes' : minutes,
//             'seconds' : seconds
//         };
//     }

//     function setClock(id, endtime) {
//         let timer = document.getElementById(id),
//             hours = timer.querySelector('.section-header-wrapper__form-sale__timer-hours'),
//             minutes = timer.querySelector('.section-header-wrapper__form-sale__timer-minutes'),
//             seconds = timer.querySelector('.section-header-wrapper__form-sale__timer-seconds');
//             updateClock();
//             timeInterval = setInterval(updateClock, 1000);

//         function updateClock() {
//             let t = getTimeRemaining(endtime);
//             hours.textContent = t.hours;
//             minutes.textContent = t.minutes;
//             seconds.textContent = t.seconds;
            
//             if (t.hours < 10) {
//                 hours.textContent = "0" + t.hours;
//             };
//             if (t.minutes < 10) {
//                 minutes.textContent = "0" + t.minutes;
//             };
//             if (t.seconds < 10) {
//                 seconds.textContent = "0" + t.seconds;
//             };

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             };
//         }
//     }

//     setClock('timer', deadLine);
// })


// Modal

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    moreThan = document.querySelectorAll('.description-btn');
   


more.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('description-btn')) {

    for (let i = 0; i < moreThan.length; i++) {
        moreThan[i].classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    }
});







close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
})

});