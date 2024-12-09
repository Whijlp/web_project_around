import Popup from "./Popup.js";

export default class PopupWhitForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }

  getInputvalues() {
    const data = {};
    const inputList = Array.from(this._popupSelector.querySelectorAll("input"));
    inputList.forEach((item) => {
      data[item.name] = item.value;
    });

    return data;
  }

  renderLoading(isloading, buttonLoading, originalText) {
    if (isloading) {
      buttonLoading.textContent = "Cargando...";
    } else {
      buttonLoading.textContent = originalText;
    }

    setTimeout(() => {}, 3000);
  }

  setEventListener() {
    super.setEventListener();
    const formElement = this._popupSelector.querySelector(".form");
    const buttonLoading = this._popupSelector.querySelector(
      ".forms__submit-button"
    );
    const originalText = buttonLoading.textContent;
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.renderLoading(true, buttonLoading, originalText);
      this._handleSubmit(this.getInputvalues()).then(() => {
        this.renderLoading(false, buttonLoading, originalText);
      });
    });
  }
}
