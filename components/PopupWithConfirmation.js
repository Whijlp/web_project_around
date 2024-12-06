import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  setEventListener() {
    super.setEventListener();
  }

  openPopupConfirmation() {
    const modal = document.querySelector(".popup_confirmation");
    modal.showModal();
  }
}
