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