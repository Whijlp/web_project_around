import FormValidator from "../components/FormValidate.js";
import Card from "../components/Card.js";
import { openImage, settingsValidation } from "./utils.js";
import Section from "../components/Section.js";
import PopupWhitForm from "../components/PopupWhitForm.js";
import PopupWithImage from "../components/PopupWhitImage.js";
import UserInfo from "../components/UserInfo.js";
import api from "../components/Api.js";

const formsPopupNewPlaces = document.querySelector("#popup__new-places");
const cardContainer = document.querySelector(".elements");
const createCardForm = document.querySelector("#create-card");
const formEditProfile = document.getElementById("form_edit-profile");
// muestra la tajetas pre exitentes

api.getInitialCards().then((initialCards) => {
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
});

//instancia de informacion de usuario
const userInfo = new UserInfo(".profile__title", ".profile__subtitle");
api.getUserInfo().then((response) => {
  console.log(response);
});

//crea las nuevas targetas
export const popupCard = new PopupWhitForm("#popup__new-places", (values) => {
  const card = new Card(
    { link: values.photo_info, name: values.titulo },
    openImage
  );
  formsPopupNewPlaces.close();
  cardContainer.prepend(card.getCard());
  validateFormNewBike.resetForm();
});
popupCard.setEventListener();

// Expande la targeta seleccionanda
export const popupWhitImage = new PopupWithImage(".popup_dialog");
popupWhitImage.setEventListener();

//edita la informacion de usuario
export const popupEditProfile = new PopupWhitForm("#popupProfile", (data) => {
  const { job_info, name } = data;
  userInfo.setUserInfo(name, job_info);
  popupEditProfile.close();
  validateFormProfile.resetForm();
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
