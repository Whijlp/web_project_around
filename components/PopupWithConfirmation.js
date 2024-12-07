import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  setEventListener() {
    super.setEventListener();
    const buttonSubmit = this._popupSelector.querySelector(
      "#confirmation-button"
    );
    buttonSubmit.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.handleSubmit();
    });
  }

  open(handleSubmit) {
    super.open();
    this.handleSubmit = handleSubmit;
  }
}
