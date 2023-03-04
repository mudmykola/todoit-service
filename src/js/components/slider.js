let swiper = new Swiper(".sliderabout-cards", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".sliderabout-controls__next",
    prevEl: ".sliderabout-controls__prev",
  },
  pagination: {
    el: ".sliderabout-pagination",
    clickable: true,
  },
});
