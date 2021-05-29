window.addEventListener('DOMContentLoaded', function () {

    'use strict'

    // let tab = document.querySelectorAll('.info-header-tab'),
    //     info = document.querySelector('.info-header'),
    //     tabContent = document.querySelectorAll('.info-tabcontent');

    // function hideTabContent(a) {
    //     for (let i = a; i < tabContent.length; i++) {
    //         tabContent[i].classList.remove('show');
    //         tabContent[i].classList.add('hide');
    //     }
    // }
    // hideTabContent(1);

    // function showTabContent(b) {
    //     if (tabContent[b].classList.contains('hide')) {
    //         tabContent[b].classList.remove('hide');
    //         tabContent[b].classList.add('show');
    //     }
    // };

    // info.addEventListener('click', function(event) {
    //     let target = event.target;
    //     if (target && target.classList.contains('info-header-tab')) {
    //         for (let i = 0; i < tab.length; i++) {
    //             if (target == tab[i]) {
    //                 hideTabContent(0);
    //                 showTabContent(i);
    //                 break;
    //             }
    //         }
    //     }
    // })

    // мои собственные

    let tab = document.querySelectorAll('.info-header-tab'),
        description = document.querySelectorAll('.info-tabcontent'),
        info = document.querySelector('.info-header');


    function start(a) {
        for (let i = a; i < tab.length; i++) {
            description[i].classList.remove('show');
            description[i].classList.add('hide');
        }
    };
    start(1);

    function choose() {

        info.addEventListener('click', function (event) {

            let target = event.target;

            if (target && target.classList.contains('info-header-tab')) {

                for (let j = 0; j < tab.length; j++) {

                    if (target == tab[j]) {
                        start(0);
                        description[j].classList.remove('hide');
                        description[j].classList.add('show');
                        
                    }
                }
            }
        });
    }
    choose();
});