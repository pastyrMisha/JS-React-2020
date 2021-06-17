
// let inputRub = document.getElementById('rub'),
// inputUsd = document.getElementById('usd');





// inputRub.addEventListener('input', () => {
// let request = new XMLHttpRequest();


// function getData() {

//     return new Promise(function (resolve, reject) {


// request.open('GET', 'js/current.json');
// request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// request.send();



// request.addEventListener('readystatechange', function() {
//     if (request.readyState === 4 && request.status == 200) {
//         // let data = JSON.parse(request.response);
//         // inputUsd.value = inputRub.value / data.usd;
//         resolve()
//     } else {
//         reject()
//         // inputUsd.value = "Что-то пошло не так!";
//     }
// });
//     })
// }
// getData()
// .then(() => {
//     let data = JSON.parse(request.response);
//     return data;
// })
// .then(() => {
 
    
//         inputUsd.value = inputRub.value / data.usd;
// })
// .catch(() => inputUsd.value = "Что-то пошло не так!")

// });


function doSomething() {
    return new Promise((resolve, reject) => {
      console.log("Готово.");
      // Успех в половине случаев.
      if (Math.random() > .5) {
        resolve("Успех")
      } else {
        reject("Ошибка")
      }
    })
  }
  
 
  doSomething().then(successCallback, failureCallback);