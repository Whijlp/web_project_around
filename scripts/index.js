import { enableValidation, resetFormValidation } from "./validate.js";
import Card from "./Card.js";
import { initialCards, openImage } from "./utils.js";

const openProfilePopup = document.querySelector(".profile__edit-button");
const openNewPlacePopup = document.querySelector(".profile__add-button");
const formsPopup = document.querySelector(".popup");
const formsPopupNewPlaces = document.querySelector("#popup__new-places");
const closeProfilePopup = document.querySelector(".forms__close-button");
const closeFormProfil = document.querySelector(".forms-profile-button");
const closePlacePopup = document.querySelector("#place-close-button");
const overlayContainer = document.querySelector(".popup__overlay");
const formElement = document.querySelector("#perfil-button");
const jobInput = document.getElementById("job_info");
const nameElement = document.querySelector(".profile__title");
const namePhotoElement = document.querySelector(".forms__title");
const jobElement = document.querySelector(".profile__subtitle");
const dialogPopup = document.querySelector(".popup_dialog");
const cardTemplate = document.querySelector("#card-template");
const cardContainer = document.querySelector(".elements");
const closeImgPopup = document.querySelector(".popup__close-button");
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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  handleClosePopup(evt);
}

function handleClosePopup(evt) {
  evt.preventDefault();
  formsPopup.classList.remove("popup__show");
  overlayContainer.classList.remove("overlay_show");
  resetFillImput(evt);
  resetFillCard(evt);
  formsPopupNewPlaces.close();
  dialogPopup.close();
  resetFormValidation(settingsValidation);
}
function resetFillImput() {
  formEditProfile.reset();
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
}

function resetFillCard() {
  createCardForm.reset();
  titleNewCard.value = namePhotoElement.textContent;
  photoNewCard.value = "https://www.ejemplo.com";
}
function handleOpenPopup() {
  formsPopup.classList.add("popup__show");
  overlayContainer.classList.add("overlay_show");
}
function fillFormInputs() {
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
  titleNewCard.value = namePhotoElement.textContent;
  photoNewCard.value = "https://www.ejemplo.com";
}
fillFormInputs();

//const validateForm = new FormValidator(settingsValidation, formEditProfile);
// validateForm.enableValidation();

openProfilePopup.addEventListener("click", handleOpenPopup);

closeProfilePopup.addEventListener("click", handleClosePopup);

closeFormProfil.addEventListener("click", handleClosePopup);

formElement.addEventListener("click", handleProfileFormSubmit);

overlayContainer.addEventListener("click", handleClosePopup);

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    handleClosePopup(evt);
  }
});

openNewPlacePopup.addEventListener("click", () => {
  formsPopupNewPlaces.showModal();
});

closePlacePopup.addEventListener("click", (evt) => {
  evt.preventDefault();
  formsPopupNewPlaces.close();
  handleClosePopup(evt);
});

dialogPopup.addEventListener("click", (evt) => {
  if (evt.target.className === "popup_dialog") {
    evt.preventDefault();
    dialogPopup.close();
  }
});

formsPopupNewPlaces.addEventListener("click", (evt) => {
  if (evt.target.className === "form__dialog") {
    evt.preventDefault();
    formsPopupNewPlaces.close();
    handleClosePopup(evt);
  }
});
