const openBtn = document.querySelector(".navigation-btn");
const modal = document.querySelector(".modalorder");
const closeModalBtn = document.querySelector(".modalorder-close");

openBtn.addEventListener("click", function () {
  modal.classList.add("show-modal");
  document.body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("show-modal");
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("show-modal");
    document.body.style.overflow = "auto";
  }
});
