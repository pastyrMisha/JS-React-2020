// localStorage.setItem("number", 1)

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("number");

// localStorage.clear();

window.addEventListener('DOMContentLoaded', function() {
    let checkbox = document.getElementById('rememberMe'),
        change =document.getElementById('change'),
        form = document.getElementsByClassName('wrapper-content')[0];

    if(localStorage.getItem('IsChecked') == 'true') {
        checkbox.checked = true;
    };

    if(localStorage.getItem('bg') == 'changed') {
        form.style.backgroundColor = "#FF4766";
    };

    

    checkbox.addEventListener('click', function() {
        localStorage.setItem('IsChecked', true);
    });

    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#FF4766";
    });

    let persone = {
        name: "Alex",
        age: 25,
        tech: ["mobile", "notebook"]
    }

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem("Alex", serializedPersone);

    console.log(JSON.parse(localStorage.getItem("Alex")));
})