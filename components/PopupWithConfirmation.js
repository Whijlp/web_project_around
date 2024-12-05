import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  getTemplate() {
    this.template = this._popupSelector.content
      .querySelector(".element")
      .cloneNode(true);
    this.button = this.template.querySelector("#delete_button");

    this.button.addEventListener("click", () => {
      console.log("Botón de eliminación clickeado");
    });
  }

  openPopupConfirmation() {
    super.open();
    this.confirmationPopup = this._popupSelector.querySelector(
      ".popup_confirmation"
    );
  }
}
