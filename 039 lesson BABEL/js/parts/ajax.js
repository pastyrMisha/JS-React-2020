"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/web.dom-collections.for-each.js");

function ajax() {
  var message = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так!'
  },
      form = document.querySelector('.main-form'),
      contactForm = document.getElementById('form'),
      input = document.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  function sendForm(elem) {
    elem.addEventListener('submit', function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage); // Сначала, при помощи объекта FormData получаем все, что ответил наш пользователь в форме 

      var formData = new FormData(elem);

      function postData(formData) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 3) resolve();
            } else {
              reject();
            }
          };

          var obj = {};
          formData.forEach(function (value, key) {
            obj[key] = value;
          });
          var json = JSON.stringify(obj);
          request.send(json);
        }); // End Promise
      } // End postData


      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        // thanksModal.style.display = 'block';
        // mainModal.style.display = 'none';
        // statusMessage.innerHTML = '';
        statusMessage.innerHTML = message.success;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    }); //End EventListener on submit
  } // End sendForm


  sendForm(form);
  sendForm(contactForm);
}

module.exports = ajax;