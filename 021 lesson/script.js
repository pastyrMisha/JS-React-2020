let box = document.querySelector('.box'),
    btn = document.querySelector('button');



// всё, что видет пользователь с полосами прокрутки, например
let width = box.clientWidth,
    height = box.clientHeight;


// всё, что видет пользователь без полос прокрутки, например
// let width = box.offsetWidth,
//     height = box.offsetHeight;


// // всё, что видет пользователь и под полосой прокрутки, например
// let width = box.scrollWidth,
//     height = box.scrollHeight;



console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);



console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

// console.log(document.documentElement.scrollTop); отбразить в консоли, сколько мы уже перелистали
// scrollBy(0, 200); перелистнуть любую страницу на 200px вниз
// scrollTo(0, 200); перелистнуть любую страницу к 200px от верха


btn.addEventListener('click', function() {
    // box.style.height = box.scrollHeight + "px";
    box.scrollTop = 0;
    // console.log(box.scrollTop);
});

// box.scrollHeight = 1500 не работает, так как scrollHeight и scrollWidth доступны только для чтения

