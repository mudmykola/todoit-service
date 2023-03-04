// Отримати всі елементи sliderteams-card__bmodal
const bmodals = document.querySelectorAll(".sliderteams-card__bmodal");
// Пробігаємо по кожному bmodal і додаємо слухач події кліку
bmodals.forEach((bmodal) => {
  bmodal.addEventListener("click", () => {
    // Отримуємо значення атрибута data-modal
    const modalNumber = bmodal.dataset.modal;
    // Вибераємо відповідний атрибут data-bmodal
    const modal = document.querySelector(
      `.sliderteams-modal[data-bmodal="${modalNumber}"]`
    );
    //  Додаємо class "open"
    modal.classList.add("open");
  });
});
// Отримуємо всі елементи sliderteams-modal__close
const closeButtons = document.querySelectorAll(".sliderteams-modal__close");
// Пробігаємося по кожній кнопці закриття та додаємо слухач події кліку
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    // Отримуємо батьківський модальний елемент
    const modal = closeButton.closest(".sliderteams-modal");

    //  Закриваємо modal видаливши class "open"
    modal.classList.remove("open");
  });
});
// Додаємо слухача на ввесь документ
document.addEventListener("click", (event) => {
  // Get the clicked element
  const { target } = event;
  // Перевірка чи є натичнутий елемент
  if (
    target.classList.contains("sliderteams-modal__cont") ||
    target.classList.contains("sliderteams-modal__close")
  ) {
    // Отримуємо батьківський елемент
    const modal = target.closest(".sliderteams-modal");

    // Закрити modal видаливши class "open"
    modal.classList.remove("open");
  }
});
