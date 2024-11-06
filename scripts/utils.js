const dialogPopup = document.querySelector(".popup_dialog");
const formsPopup = document.querySelector(".popup");
const overlayContainer = document.querySelector(".popup__overlay");
const openProfilePopup = document.querySelector(".profile__edit-button");
const closePlacePopup = document.querySelector("#place-close-button");
const formsPopupNewPlaces = document.querySelector("#popup__new-places");
const closeProfilePopup = document.querySelector(".forms__close-button");
const closeFormProfil = document.querySelector(".forms-profile-button");
const openNewPlacePopup = document.querySelector(".profile__add-button");

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

export function openImage(item) {
  const dialogImge = dialogPopup.querySelector(".popup__img");
  const dialogDescription = dialogPopup.querySelector(".popup__description");
  dialogPopup.showModal();
  dialogImge.src = item.link;
  dialogImge.alt = item.name;
  dialogDescription.textContent = item.name;
}
export function handleOpenPopup() {
  formsPopup.classList.add("popup__show");
  overlayContainer.classList.add("overlay_show");
}
export function handleClosePopup(evt) {
  evt.preventDefault();
  formsPopup.classList.remove("popup__show");
  overlayContainer.classList.remove("overlay_show");
  formsPopupNewPlaces.close();
  dialogPopup.close();
  validateFormProfile._resetForm();
  validateFormNewBike._resetForm();
}

openProfilePopup.addEventListener("click", handleOpenPopup);

closeProfilePopup.addEventListener("click", handleClosePopup);

closeFormProfil.addEventListener("click", handleClosePopup);

overlayContainer.addEventListener("click", handleClosePopup);

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
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    handleClosePopup(evt);
  }
});
import { validateFormNewBike, validateFormProfile } from "./index.js";
