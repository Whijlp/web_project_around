import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    super.open();
    this.cardImage = this._popupSelector.querySelector(".popup__img");
    this.cardDescription = this._popupSelector.querySelector(
      ".popup__description"
    );
    this.cardImage.src = link;
    this.cardImage.alt = name;
    this.cardDescription.texcontent = name;
  }
}
