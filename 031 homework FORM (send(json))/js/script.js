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
        deadline = '2021-10-21';

// Tabs
    const hideTabContent = (a) => {
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
        };

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

// Timer
    const getTimeRemaining = (endtime) => {
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

    setClock('timer', deadline);

// Modal 
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
// Form
    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так!'
    };

    let form = document.querySelector('.main-form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactForm = document.getElementById('form');

        statusMessage.classList.add('status');

let sendForm = (elem) => {

    elem.addEventListener('submit', function(event) {
    event.preventDefault();
    elem.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


// ====
    // Сначала, при помощи объекта FormData получаем все, что ответил наш пользователь в форме 
    let formData = new FormData(elem);
    
    // Создаем новый объект, в который мы поместим все эти данные
    let obj = {}; 

    // С помощью метода forEach мы берем наш объект FormData и все данные, которые есть в нем помещаем в этот объект obj
    formData.forEach(function(value, key) { 
        obj[key] =  value;
    });

    // Осталось только превратить объект obj в json формат, при помощи одного из двух методов
    let json = JSON.stringify(obj); 
    
    // Отправляем json на сервер
    request.send(json); 
// ====


    request.addEventListener('readystatechange', function() {
        if(request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if(request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });

    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
});

};
sendForm(form);
sendForm(contactForm);
// ------------- HomeWork

});