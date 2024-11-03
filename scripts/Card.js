export default class Card {
  constructor(data, openImage) {
    this._name = data.name;
    this._link = data.link;
    this._openImage = openImage;
  }

  _getElement() {
    this.cardElement = document.querySelector(".elements");
    return this.cardElement
      .querySelector("#card-template")
      .content.querySelector(".element")
      .cloneNode(true);
  }

  _setProperties() {
    this.element = this._getElement();

    this.cardImage = this.element.querySelector(".element__image");
    this.cardDescription = this.element.querySelector(".element__title");
    this.dialogImg = this.cardElement.querySelector(".popup_dialog");
    this.dialogDescription = this.element.querySelector(".popup__description");
    this.closeButtonPopup = this.cardElement.querySelector(
      ".popup__close-button"
    );
    this.likeButton = this.element.querySelector(".element__like");
    this.trashCard = this.element.querySelector(".element__trash");

    this.cardImage.src = this._link;
    this.cardImage.alt = this._name;
    this.cardDescription.textContent = this._name;
  }

  _toogleLike() {
    this.likeButton.classList.toggle("element__like-active");
  }

  _removeCard() {
    console.log(this.element);
    this.element.remove();
  }

  _closePopup() {
    this.dialogImg.close();
  }

  setEventsListeners() {
    this.likeButton.addEventListener("click", () => {
      this._toogleLike();
    });

    this.trashCard.addEventListener("click", () => {
      console.log("pip");
      this._removeCard();
    });

    this.closeButtonPopup.addEventListener("click", () => {
      this._closePopup();
    });

    this.cardImage.addEventListener("click", () => {
      const item = { name: this._name, link: this._link };
      this._openImage(item);
    });
  }
  getCard() {
    this._setProperties();
    this.setEventsListeners();
    return this.element;
  }
}
