// localStorage.setItem("number", 1)

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("number");

// localStorage.clear();

window.addEventListener('DOMContentLoaded', function() {
    let checkbox = document.getElementById('rememberMe');

    checkbox.addEventListener('click', function() {
        localStorage.setItem('IsChecked', true);
    })
})