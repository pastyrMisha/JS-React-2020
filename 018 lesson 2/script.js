// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

    // box.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     console.log("Red box: touchstart");
    //     console.log(e.touches[0].target);
    //     console.log(e.touches);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    //     });

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log("Red box: "  + e.touches[0].pageX);
    });

    box.addEventListener('touchend', function(e) {
        e.preventDefault();
        console.log("Red box: touchend");
    });

});

