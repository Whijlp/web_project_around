const openProfilePopup = document.querySelector(".profile__edit-button");
const formsPopup = document.querySelector(".forms");
const closeProfilePopup = document.querySelector(".forms__close-button");

openProfilePopup.addEventListener("click", function () {
  formsPopup.classList.remove("forms");
  console.log("se ha echo clic en el boton");
});

closeProfilePopup.addEventListener("click", function () {
  formsPopup.classList.add("forms");
  console.log("se ha cerrado la ventana");
});
