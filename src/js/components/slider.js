let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".sliderabout-controls__next",
    prevEl: ".sliderabout-controls__prev",
  },
  pagination: {
    el: ".sliderabout-pagination",
    clickable: true,
  },
});
