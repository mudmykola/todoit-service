let swiper = new Swiper(".sliderteams-cards", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".sliderteams-controls__next",
    prevEl: ".sliderteams-controls__prev",
  },
  pagination: {
    el: ".sliderteams-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
