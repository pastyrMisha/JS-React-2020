// NATIVE vs jQuery

// document.getElementById('btn');
// $('.btn');

$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toogleClass('active');
    });
})