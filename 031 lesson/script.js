// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };

// console.log(JSON.parse(JSON.stringify(options)));

// ---------------------------------------


let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // status — код, например 404 и тп. Пришли в магазин и видито магазин открыт, закрыт, перерыв
    // statusText — тестовое описание ответа  от сервера.
    // responseText / response — текст ответа сервера. Это то, что backend-разработчик хочет отпраить с сервера. Это те товары, которые Вы можете купить в магазине.    
    // readyState — текущее состояние запроса. Этапов всего пять:
    // UNSENT — нулевой. Когда наш объект создается, но метод open() еще не вызввался. (Подумали сходить в магазин)
    // OPENED — первый. Когда метод open() вызван и начинает работать. (Еще никуда не двинулись, только запланировали что будем покупать в магазине, какой нащ бюджет и тд.)
    // HEADERS_RECEIVED — второй. Метод вызван и доступны те заголовки, которые Мы настроили. (Вышли из дома, знаем что купим, идем к нашему магазину)
    // LOADING — третий. Наш запрос идет к серверу и загружается. (То, что мы находимся в нашем магазине, бродим, выбираем товары)
    // DONE — четвертый. Запрос полностью выполнен. (Купили на кассе какие-то продукты, может работать с результатами работы).

    // readystatechange — событие, которое реагирует на изменение состояния readyState (от 0 до 4). Еще можно 'load', но оно просто говорит «окей» или нет

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
            // data.usd — получили из JSON файла сконвертированного под JS свойство usd
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });
})