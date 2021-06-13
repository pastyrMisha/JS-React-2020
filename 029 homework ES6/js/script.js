window.addEventListener('DOMContentLoaded', () => {

    'use strict'


    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        mainInfo = document.querySelector('.info'),
        more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descBtn = document.querySelectorAll('.description-btn'),

        // Tabs
        hideTabContent = (a) => {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        },

        showTabContent = (b) => {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        },

        // Timer
        deadline = '2021-10-21',
        getTimeRemaining = (endtime) => {
            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / 1000 / 60 / 60) % 24),
                days = Math.floor((t / (1000 * 60 * 60 * 24)));

            return {
                total: t,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        },

        setClock = (id, endtime) => {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                updateClock = () => {
                    let t = getTimeRemaining(endtime);
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


    // Tabs (вызовы и события)
    hideTabContent(1);

    info.addEventListener('click', (event) => {
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
    });

    // Timer (вызовы и события)
    setClock('timer', deadline);


    // Modal (вызовы и события)
    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = '';
    });

    mainInfo.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            target.classList.add('more-splash');
            overlay.style.display = 'block';
            document.body.style.overflow = '';

        }
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
        descBtn.forEach((descBtn) => {
            descBtn.classList.remove('more-splash');
        })
    });


});