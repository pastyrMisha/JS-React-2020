let age = document.getElementById('age');

function User(surname, name) {
    this.name = name;
    this.surname = surname;
    this.hello = function showUser() {
        alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    };
}
User.prototype.age = age.value;


let Mike = new User('Михаил', 'Мишустин');

console.log(Mike);
Mike.hello();



// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     }
// }
// User.prototype.exit = function(name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 25);

// console.log(ivan);
// console.log(alex);

// alex.hello();
// ivan.exit();

