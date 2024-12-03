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

  setEventListener() {
    super.setEventListener();
    console.log(this._popupSelector);
    const formElement = this._popupSelector.querySelector(".form");
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this.getInputvalues());
    });
  }
}
