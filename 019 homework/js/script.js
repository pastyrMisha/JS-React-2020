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
        description = document.querySelectorAll('.info-tabcontent');


    function start(a) {

        for (let i = a; i < tab.length; i++) {

            tab[a].addEventListener('click', function (event) {
                let target = event.target;
            if ()
            });


          
                description[i].classList.add('show');
                description[i].classList.remove('hide');
            
        }
    }
    start(0);


    // function accept() {


        

    //             if (target == tab[i]) {
    //                 description[i].classList.add('show');
    //                 description[i].classList.remove('hide');

    //             }
    //             if (i == a) {
    //                 description[i].classList.add('hide');
    //                 description[i].classList.remove('show');
    //             }
    //         });
    //     }
    //     accept();


});