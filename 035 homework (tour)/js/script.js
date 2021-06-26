$(document).ready(function() {
    $('.main_btna, .main_btn, nav ul li:eq(1)').on('click', function() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });
    $('.close').on('click', function() {
        $('.modal').slideUp('slow');
        $('.overlay').fadeOut('slow');
    });
});