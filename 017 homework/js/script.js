let menuItem = document.querySelectorAll('.menu-item');
    menu = document.querySelector('.menu');
    liItem = document.createElement('li');
    title = document.getElementById('title');
    adv = document.querySelector('.adv');
    column = document.querySelectorAll('.column');
    answer = document.getElementById('prompt');


menuItem[0].style.order = '1';
menuItem[1].style.order = '3';
menuItem[2].style.order = '2';
menuItem[3].style.order = '4';



liItem.classList.add('menu-item');
liItem.textContent = ('Пятый пункт');

menu.appendChild(liItem);
liItem.style.order = '5';

document.body.style.background = 'url(img/apple_true.jpg)  no-repeat';

title.textContent = ('Мы продаем только подлинную технику Apple');

column[1].removeChild(adv);


let question = prompt('Ваше отношение к технике apple');

answer.textContent = (question);