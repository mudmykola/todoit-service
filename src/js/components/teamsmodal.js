// Get all sliderteams-card__bmodal elements
const bmodals = document.querySelectorAll(".sliderteams-card__bmodal");
// Loop through each bmodal and add a click event listener
bmodals.forEach((bmodal) => {
  bmodal.addEventListener("click", () => {
    // Get the value of the data-modal attribute
    const modalNumber = bmodal.dataset.modal;
    // Select the corresponding modal based on the data-bmodal attribute
    const modal = document.querySelector(
      `.sliderteams-modal[data-bmodal="${modalNumber}"]`
    );
    // Open the modal by adding the "open" class
    modal.classList.add("open");
  });
});
// Get all sliderteams-modal__close elements
const closeButtons = document.querySelectorAll(".sliderteams-modal__close");
// Loop through each close button and add a click event listener
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    // Get the parent modal element
    const modal = closeButton.closest(".sliderteams-modal");

    // Close the modal by removing the "open" class
    modal.classList.remove("open");
  });
});
// Add a click event listener to the entire document
document.addEventListener("click", (event) => {
  // Get the clicked element
  const { target } = event;
  // Check if the clicked element is a modal content element or a close button
  if (
    target.classList.contains("sliderteams-modal") ||
    target.classList.contains("sliderteams-modal__close")
  ) {
    // Get the parent modal element
    const modal = target.closest(".sliderteams-modal");

    // Close the modal by removing the "open" class
    modal.classList.remove("open");
  }
});
