import { settingsValidation, FormValidator } from "./FormValidate.js";
import Card from "./Card.js";
import {
  initialCards,
  openImage,
  handleOpenPopup,
  handleClosePopup,
} from "./utils.js";

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

initialCards.forEach((item) => {
  const card = new Card(item, openImage);
  const cardElement = card.getCard();
  cardContainer.prepend(cardElement);
});

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
  handleClosePopup(evt);
}

formElement.addEventListener("click", handleProfileFormSubmit);
