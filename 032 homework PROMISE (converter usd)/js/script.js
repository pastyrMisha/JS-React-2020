let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');



inputRub.addEventListener('input', () => {
    function getData() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
           

            request.onreadystatechange = function () {
                if (request.readyState <= 4) {
                    if (request.status == 200 && request.status < 3)
                        resolve()
                } else {
                    reject()
                }
            }
            request.send();
        });
    };
    getData()
        .then(() => {
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
            console.log('nzr');
        })
        .catch(() => inputUsd.value = "Что-то пошло не так!")
});


// 