import FormValidator from "../components/FormValidate.js";
import Card from "../components/Card.js";
import {
  initialCards,
  openImage,
  //handleOpenPopup,
  //handleClosePopup,
} from "./utils.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";

const formsPopupNewPlaces = document.querySelector("#popup__new-places");
const formElement = document.querySelector("#perfil-button");
const jobInput = document.getElementById("job_info");
const nameElement = document.querySelector(".profile__title");
const jobElement = document.querySelector(".profile__subtitle");
const cardContainer = document.querySelector(".elements");
const createCardForm = document.querySelector("#create-card");
const titleNewCard = document.querySelector("#titulo");
const photoNewCard = document.querySelector("#photo_info");
const formEditProfile = document.getElementById("form_edit-profile");
const nameInput = formEditProfile.querySelector("#nombre");
const openProfilePopup = document.querySelector(".profile__edit-button");
const openNewPlacePopup = document.querySelector(".profile__add-button");
const closeFormProfil = document.querySelector(".forms-profile-button");
const overlayContainer = document.querySelector(".popup__overlay");
const closePlacePopup = document.querySelector("#place-close-button");

const settingsValidation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".forms__submit-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "popup__error_visible",
};

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
//

const popupProfile = new Popup("#popupProfile");
const popupNewCard = new Popup("#popup__new-places");

createCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const card = new Card(
    {
      link: photoNewCard.value,
      name: titleNewCard.value,
    },
    openImage
  );
  const cardElement = card.getCard();
  cardContainer.prepend(cardElement);
  formsPopupNewPlaces.close();
});

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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  popupProfile.close();
}

formElement.addEventListener("click", handleProfileFormSubmit);
