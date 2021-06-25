// NATIVE vs jQuery

// document.getElementById('btn');
// $('.btn');

$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('animate__heartBeat');
    });
    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });
    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );
    });
})

// document.querySelectorAll('.list-item').forEach   — вот, что в JS заменяет значек $ (!)
// .classList   — у JS теперь можно также тоглить классы (!) 
// .addEventListener   — раньше его не было, а был у jQuery только .on()
// $.ajax — этот метод работал у jQuery с запросами, теперь у JS есть .fetch
//  .fadeToggle , .animate — любили jQuery за создание анимаций до тех пор, пока не появился CSS3, в котором без JS уже можно подключать различные анимации (!). Так же теперь в JS есть и метод .animate() тоже, но, пока, поддерживается не всеми браузерами.

// Angular:

// 1) node -> npm
// 2) TypeScript
// 3) Webpack
// 4) MVC (model view controler)
// 5) Angular

// React:

// 1) node -> npm
// 2) Babel
// 3) JSX
// 4) React
// 5) Webpack

// Vue:

// 1) node -> npm
// 2) Babel
// 3) Webpack