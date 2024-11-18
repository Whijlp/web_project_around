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

export const initialCards = [
  {
    name: "Tiger 900",
    link: "https://images.unsplash.com/photo-1690540293130-2ca04fbf815b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Africa Twin",
    link: "https://images.unsplash.com/photo-1667862224967-a25abfb769a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Gs 1200 K25",
    link: "https://i.pinimg.com/originals/38/b5/3f/38b53ffb5d1c1a9906d5fb1f0e91df27.jpg",
  },
  {
    name: "Gs 1200 K50",
    link: "https://images.unsplash.com/photo-1697180932521-a2355bdd7b25?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ninja 300",
    link: "https://images.unsplash.com/photo-1526956378276-b120acd89f17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "MotoGuzzi",
    link: "https://images.unsplash.com/photo-1523441518994-ee75e12bd3d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

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

//Evento para resetiar los formularios cuando se haga click en el boton de cerrar popup
closePlacePopup.addEventListener("click", () => {
  validateFormNewBike.resetForm();
});

closeFormProfil.addEventListener("click", () => {
  validateFormProfile.resetForm();
});
