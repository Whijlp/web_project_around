import FormValidator from "../components/FormValidate.js";
import Card from "../components/Card.js";
import { openImage, settingsValidation } from "./utils.js";
import Section from "../components/Section.js";
import PopupWhitForm from "../components/PopupWhitForm.js";
import PopupWithImage from "../components/PopupWhitImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const formsPopupNewPlaces = document.querySelector("#popup__new-places");
const cardContainer = document.querySelector(".elements");
const createCardForm = document.querySelector("#create-card");
const formEditProfile = document.getElementById("form_edit-profile");
const openAvatarProfile = document.querySelector(".profile_avatar");
const formPopupAvatar = document.querySelector("#form_edit-avatar");
const url = "https://around-api.es.tripleten-services.com/v1";

const api = new Api({
  baseURL: url,
  headers: {
    authorization: "327c3904-1c97-4a31-961f-faa6d3ffb204",
    "Content-Type": "application/json",
  },
});

const popupWithConfirmation = new PopupWithConfirmation(".popup_confirmation");

api.getInitialCards().then((initialCards) => {
  const renderCard = new Section(
    {
      items: initialCards,
      renderer: (cardItems) => {
        const card = new Card(
          cardItems,
          openImage,
          () => {
            handleDelete(cardItems, card);
          },
          api.likeCard,
          api.deleteLikeCard
        );
        return card.getCard();
      },
    },
    ".elements"
  );
  renderCard.renderer();
});

const handleDelete = (cardItems, card) => {
  popupWithConfirmation.open(() => {
    api.deleteCard(cardItems._id).then(() => {
      card._removeCard();
      popupWithConfirmation.close();
    });
  });
};

//instancia de informacion de usuario
const userInfo = new UserInfo(
  ".profile__title",
  ".profile__subtitle",
  ".profile_image"
);
api.getUserInfo().then((response) => {
  userInfo.setUserInfo(response.name, response.about, response.avatar);
});

//crea las nuevas targetas
export const popupCard = new PopupWhitForm("#popup__new-places", (values) => {
  api
    .createCard({ link: values.photo_info, name: values.titulo })
    .then((res) => {
      const card = new Card(
        { link: values.photo_info, name: values.titulo },
        openImage
      );
      cardContainer.prepend(card.getCard());
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      formsPopupNewPlaces.close();
      validateFormNewBike.resetForm();
    });
});
popupCard.setEventListener();
popupWithConfirmation.setEventListener();
// Expande la targeta seleccionanda
export const popupWhitImage = new PopupWithImage(".popup_dialog");
popupWhitImage.setEventListener();

//edita la informacion de usuario
export const popupEditProfile = new PopupWhitForm("#popupProfile", (data) => {
  const { job_info, name } = data;
  api
    .editUserInfo({
      name: name,
      about: job_info,
    })
    .then((response) => {
      userInfo.setUserInfo(response.name, response.about, response.avatar);
    });
  userInfo.setUserInfo(name, job_info);
  popupEditProfile.close();
  validateFormProfile.resetForm();
});
popupEditProfile.setEventListener();

//editar avatar

const popupEditAvatarProfile = new PopupWhitForm(
  "#avatar_edit-profile",
  (values) => {
    api.editAvatarUser({ avatar: values.avatar }).then((response) => {
      userInfo.setUserInfo(response.name, response.about, response.avatar);
    });
    popupEditAvatarProfile.close();
  }
);
popupEditAvatarProfile.setEventListener();

openAvatarProfile.addEventListener("click", (evt) => {
  evt.preventDefault;

  popupEditAvatarProfile.open();
});

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

const popupValidationAvatar = new FormValidator(
  settingsValidation,
  formPopupAvatar
);
popupValidationAvatar.enableValidation();
