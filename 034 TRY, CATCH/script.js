let json = '{"id":2}'

try {
    // console.log('Начинаем работу');
    // console.log(a);
    // console.log('Результат');
    let user = JSON.parse(json);
    // let user = JSON.parse(data); // вдрун пришло то, что нас не интересует, то catch
    console.log(user);

    if(!user.name) {
        throw new Error("В этих данных нет имени!")
    }
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`Мы получили ошибку: ${error.name}`);
} finally {
    console.log('А я выполнюсь всегда!');
}

console.log('А я буду работать дальше');