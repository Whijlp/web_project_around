const openProfilePopup = document.querySelector(".profile__edit-button");
const formsPopup = document.querySelector(".forms");
const closeProfilePopup = document.querySelector(".forms__close-button");
const overlayContainer = document.querySelector(".body__overlay");

openProfilePopup.addEventListener("click", function () {
  formsPopup.classList.add("forms_show");
  overlayContainer.classList.add("overlay_show");
  console.log("se ha echo clic en el boton");
});

closeProfilePopup.addEventListener("click", function () {
  formsPopup.classList.remove("forms_show");
  overlayContainer.classList.remove("overlay_show");
  console.log("se ha cerrado la ventana");
});
