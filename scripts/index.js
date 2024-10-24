import { resetFormValidation, settingsValidation } from "./validate.js";

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
const formList = document.querySelectorAll(".form");
const initialCards = [
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

function createCard(item) {
  const card = cardTemplate.content.querySelector(".element").cloneNode(true);
  const cardImg = card.querySelector(".element__image");
  const cardDescription = card.querySelector(".element__title");
  const dialogImge = dialogPopup.querySelector(".popup__img");
  const dialogDescription = dialogPopup.querySelector(".popup__description");
  const like = card.querySelector(".element__like");
  const trashCard = card.querySelector(".element__trash");

  cardImg.src = item.link;
  cardImg.alt = item.name;
  cardDescription.textContent = item.name;

  cardImg.addEventListener("click", () => {
    dialogPopup.showModal();
    dialogImge.src = item.link;
    dialogImge.alt = item.name;
    dialogDescription.textContent = item.name;
  });

  closeImgPopup.addEventListener("click", () => {
    dialogPopup.close();
  });

  like.addEventListener("click", () => {
    like.classList.toggle("element__like-active");
  });

  trashCard.addEventListener("click", () => {
    card.remove();
  });

  cardContainer.prepend(card);
}

initialCards.forEach((item) => {
  createCard(item);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  handleClosePopup(evt);
}

function handleOpenPopup() {
  formsPopup.classList.add("popup__show");
  overlayContainer.classList.add("overlay_show");
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

function fillFormInputs() {
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
  titleNewCard.value = namePhotoElement.textContent;
  photoNewCard.value = "https://www.ejemplo.com";
}
fillFormInputs();

openProfilePopup.addEventListener("click", handleOpenPopup);

closeProfilePopup.addEventListener("click", handleClosePopup);

closeFormProfil.addEventListener("click", handleClosePopup);

formElement.addEventListener("click", handleProfileFormSubmit);

overlayContainer.addEventListener("click", handleClosePopup);

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    handleClosePopup(evt);
    console.log("cierra");
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

createCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  createCard({ link: photoNewCard.value, name: titleNewCard.value });
  formsPopupNewPlaces.close();
});
