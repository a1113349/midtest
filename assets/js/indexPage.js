"use strict";

var swiper; 

var nowSwiper = 3;
$(document).ready(function () {
  swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 16,
    centeredSlides: false,
    autoplay: {
      disableOnInteraction: true,
      delay: 3000
    },
    breakpoints: {
      460: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
});
//# sourceMappingURL=indexPage.js.map
