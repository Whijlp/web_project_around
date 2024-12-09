import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  renderLoading(isloading, buttonSubmit, originalText) {
    if (isloading) {
      buttonSubmit.textContent = "Cargando...";
    } else {
      buttonSubmit.textContent = originalText;
    }

    setTimeout(() => {}, 3000);
  }

  setEventListener() {
    super.setEventListener();
    const buttonSubmit = this._popupSelector.querySelector(
      "#confirmation-button"
    );
    const originalText = buttonSubmit.textContent;
    buttonSubmit.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.renderLoading(true, buttonSubmit, originalText);
      this.handleSubmit().then(() => {
        this.renderLoading(false, buttonSubmit, originalText);
      });
    });
  }

  open(handleSubmit) {
    super.open();
    this.handleSubmit = handleSubmit;
  }
}
