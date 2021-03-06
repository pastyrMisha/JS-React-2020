// window.addEventListener('DOMContentLoaded', () => {

//     'use strict'


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
                seconds = timer.querySelector('.seconds');
                function updateClock() {
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
                };

                updateClock()
                let timeInterval = setInterval(updateClock, 1000);

                return '' // нужна для test.js 
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
        contactForm = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function sendForm(elem) {


        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            elem.appendChild(statusMessage);
            // Сначала, при помощи объекта FormData получаем все, что ответил наш пользователь в форме 
            let formData = new FormData(elem);

            function postData(formData) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 3)
                                resolve()
                        } else {
                            reject()
                        }
                    }

                    let obj = {};

                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });

                    let json = JSON.stringify(obj);

                    request.send(json);

                }) // End Promise
            } // End postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    // thanksModal.style.display = 'block';
                    // mainModal.style.display = 'none';
                    // statusMessage.innerHTML = '';
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)

        }) //End EventListener on submit
    } // End sendForm
    sendForm(form);
    sendForm(contactForm);


    // Slider
    let sliderIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(sliderIndex);

    function showSlides(n) {

        if (n > slides.length) {
            sliderIndex = 1;
        }
        if (n < 1) {
            sliderIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[sliderIndex - 1].style.display = 'block';
        dots[sliderIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(sliderIndex += n);
    }

    function currentSlide(n) {
        showSlides(sliderIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    })

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    //  ---------------------------------------------------
    // Calc
    let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total');

totalValue.innerHTML = 0;

    function calc() {
        let multiplier = place.options[place.selectedIndex].value,
            personsValue = +persons.value,
            restDaysValue = +restDays.value;
        if (+personsValue > 0 && +restDaysValue > 0 ) {
            totalValue.innerHTML = (personsValue + restDaysValue) * 4000 * multiplier;
        } else {
            totalValue.innerHTML = 0;
            
        }
   
    };

    persons.addEventListener('change', function () {   
        calc();
    });

    restDays.addEventListener('change', function () {
        calc();
    });

    place.addEventListener('change', function () {
        calc();
    });


// });