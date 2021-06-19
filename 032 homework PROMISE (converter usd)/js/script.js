let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');


inputRub.addEventListener('input', () => {



    function getData() {

        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
          
            request.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                        resolve(JSON.parse(this.responseText))
                } 
                else {
                    reject("Что-то пошло не так!")
                } 
            }

            request.open('GET', 'js/current.json', true);
            // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
        })
    }
    getData()
        .then(data =>  inputUsd.value = inputRub.value / data.usd)
        .catch(err => inputUsd.value = err)

});