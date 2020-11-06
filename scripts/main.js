'use strict';

const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const star = document.querySelectorAll('.star');

let count = 0;
star.forEach((e) => {
  e.style.animationDelay = `${(count += 0.1)}s`;
});

menuButton.addEventListener('click', function () {
  header.classList.toggle('header-active');
  menuButton.classList.toggle('menu-button-active');
});

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    541: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
