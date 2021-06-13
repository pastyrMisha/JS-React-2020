let age = document.getElementById('age');

function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
  };

 let double = showUser.bind(age); // К кому привязать и (что)

double('Михаил', 'Мишустин'); // теперь дабл — это ф-ия и тут (указываем остальные параметры функции, к которой age привязали) 




// // Вариант из интернета

// let age = document.getElementById('age');
 
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
 
// showUser.apply(age, ["Горький","Максим"]);


