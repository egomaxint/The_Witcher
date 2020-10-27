'use strict';

const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');

menuButton.addEventListener('click', function () {
  header.classList.toggle('header-active');
});

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
});
