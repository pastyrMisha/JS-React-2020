function User (name, age) {
    this.name = name;
    let userAge = age;

// Геттер:
    this.getAge = function() {
        return userAge;
    }
// Сеттер:
    this.setAge = function(age) {
        if(typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    };
    this.say = function() {
        console.log(`Имя пользователя ${this.name}, возраст: ${this.userAge}`);
    };
}

let user = new User('Ivan', 25);
console.log(user.name);
console.log(user.userAge);
user.say();
console.log(user.getAge());
user.setAge('30');
console.log(user.getAge());

// Любой человек взял и заменил:
// user.age = 30;
// user.name = 'Alex';
// user.say();