import FormValidator from "../components/FormValidate.js";
import Card from "../components/Card.js";
import { initialCards, openImage } from "./utils.js";
import Section from "../components/Section.js";
import PopupWhitForm from "../components/PopupWhitForm.js";
import PopupWithImage from "../components/PopupWhitImage.js";
import UserInfo from "../components/UserInfo.js";

const formsPopupNewPlaces = document.querySelector("#popup__new-places");
//const formElement = document.querySelector("#perfil-button");
//const jobInput = document.getElementById("job_info");
//const nameElement = document.querySelector(".profile__title");
//const jobElement = document.querySelector(".profile__subtitle");
const cardContainer = document.querySelector(".elements");
const createCardForm = document.querySelector("#create-card");
//const titleNewCard = document.querySelector("#titulo");
//const photoNewCard = document.querySelector("#photo_info");
const formEditProfile = document.getElementById("form_edit-profile");
//const nameInput = formEditProfile.querySelector("#nombre");
const openProfilePopup = document.querySelector(".profile__edit-button");
const openNewPlacePopup = document.querySelector(".profile__add-button");
//const closeFormProfil = document.querySelector(".forms-profile-button");
const overlayContainer = document.querySelector(".popup__overlay");

//const closePlacePopup = document.querySelector("#place-close-button");

const settingsValidation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".forms__submit-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "popup__error_visible",
};

// muestra la tajetas pre exitentes
const renderCard = new Section(
  {
    items: initialCards,
    renderer: (cardItems) => {
      const card = new Card(cardItems, openImage);
      return card.getCard();
    },
  },
  ".elements"
);
renderCard.renderer();

//instancia de informacion de usuario
const userInfo = new UserInfo(".profile__title", ".profile__subtitle");

//crea las nuevas targetas
const popupCard = new PopupWhitForm("#popup__new-places", (values) => {
  const card = new Card(
    { link: values.photo_info, name: values.titulo },
    openImage
  );
  formsPopupNewPlaces.close();
  cardContainer.prepend(card.getCard());
  validateFormNewBike._resetForm();
});
popupCard.setEventListener();

// Expande la targeta seleccionanda
const popupWhitImage = new PopupWithImage(".popup_dialog");
popupWhitImage.setEventListener();

//ediata la informacion de usuario
const popupEditProfile = new PopupWhitForm("#popupProfile", (data) => {
  const { job_info, name } = data;
  userInfo.setUserInfo(name, job_info);
  popupEditProfile.close();
  validateFormProfile._resetForm();
});
popupEditProfile.setEventListener();

//validacion de los dos formularios
export const validateFormProfile = new FormValidator(
  settingsValidation,
  formEditProfile
);
validateFormProfile.enableValidation();

export const validateFormNewBike = new FormValidator(
  settingsValidation,
  createCardForm
);
validateFormNewBike.enableValidation();

// Eventos de click para abrir perfil y nueva tarjeta
openProfilePopup.addEventListener("click", () => {
  popupEditProfile.open();
});

openNewPlacePopup.addEventListener("click", () => {
  popupCard.open();
});
