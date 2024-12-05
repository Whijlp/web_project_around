import {
  popupEditProfile,
  popupCard,
  validateFormProfile,
  validateFormNewBike,
} from "./index.js";

const openProfilePopup = document.querySelector(".profile__edit-button");
const openNewPlacePopup = document.querySelector(".profile__add-button");
const closePlacePopup = document.querySelector("#place-close-button");
const closeFormProfil = document.querySelector(".forms-profile-button");

export const settingsValidation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".forms__submit-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "popup__error_visible",
};

export function openImage(item) {
  const dialogPopup = document.querySelector(".popup_dialog");
  const dialogImge = dialogPopup.querySelector(".popup__img");
  const dialogDescription = dialogPopup.querySelector(".popup__description");
  dialogPopup.showModal();
  dialogImge.src = item.link;
  dialogImge.alt = item.name;
  dialogDescription.textContent = item.name;
}

// Eventos de click para abrir perfil y nueva tarjeta
openProfilePopup.addEventListener("click", () => {
  popupEditProfile.open();
});

openNewPlacePopup.addEventListener("click", () => {
  popupCard.open();
});

// deletebutton.addEventListener("click", () => {
//   console.log("pip");
// });

//Evento para resetiar los formularios cuando se haga click en el boton de cerrar popup
closePlacePopup.addEventListener("click", () => {
  validateFormNewBike.resetForm();
});

closeFormProfil.addEventListener("click", () => {
  validateFormProfile.resetForm();
});
