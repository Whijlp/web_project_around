import Popup from "./Popup";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    super.open();
    this.cardImage = this._popupSelector.querySelector(".popup__img");
    this.cardDescription = this._popupSelector.querySelector(
      ".popup__description"
    );
    this.cardImage.texcontent = name;
    this.cardDescription.src = link;
  }
}
