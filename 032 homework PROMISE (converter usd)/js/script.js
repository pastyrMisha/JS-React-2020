let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {


    let request = new XMLHttpRequest();
    


    function getData() {
        return new Promise(function (resolve, reject) {

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            


            request.onreadystatechange = function () {
                if (request.readyState < 4) {
                    resolve()
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 3)
                        resolve()
                } else {
                    reject()
                }
            };

            
        

            request.send();
            
        });

    };

    getData()
    
        .then(() => {
            inputUsd.value = "Что-то пошло  так!"
        })
        .catch(() =>  inputUsd.value = "Что-то пошло не так!")
});