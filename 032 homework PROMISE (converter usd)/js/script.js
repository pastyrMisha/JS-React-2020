let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');





inputRub.addEventListener('input', () => {



    function getData() {

        return new Promise(function (resolve, reject) {

            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();



            request.addEventListener('readystatechange', function () {

                // if (request.readyState === 4 && request.status == 200) {
                //     resolve(JSON.parse(request.response));
                // } else {
                //     reject("Что-то пошло не так!")
                // }
                
                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        // console.log('1');
                        resolve(JSON.parse(request.response))
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 3) {
                            // console.log('2');
                            resolve(JSON.parse(request.response)) }
                    } else {
                        // console.log('3');
                        reject("Что-то пошло не так!")
                    }
                }
            });
        })
    }
    getData()
        .then(data => inputUsd.value = inputRub.value / data.usd)

        .catch(err => inputUsd.value = err)

});