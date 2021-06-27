"use strict";

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

function slider() {
  var sliderIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(sliderIndex);

  function showSlides(n) {
    if (n > slides.length) {
      sliderIndex = 1;
    }

    if (n < 1) {
      sliderIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[sliderIndex - 1].style.display = 'block';
    dots[sliderIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(sliderIndex += n);
  }

  function currentSlide(n) {
    showSlides(sliderIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;