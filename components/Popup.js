export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._popupOverlay = this._popupSelector.querySelector(".popup__overlay");
    this._closeButton = document.querySelector(".forms__close-button");
    this._handleEscClose = this._handleEscClose;
    this._isDialog = false;
    if (this._popupSelector.tagName == "DIALOG") {
      this._isDialog = true;
    }
  }

  open() {
    if (this._isDialog == true) {
      this._popupSelector.showModal();
    } else {
      this._popupSelector.classList.add("popup__show");
      this._popupOverlay.classList.add("overlay_show");
    }
  }

  close() {
    if (this._isDialog == true) {
      this._popupSelector.close();
    } else {
      this._popupSelector.classList.remove("popup__show");
      this._popupOverlay.classList.remove("overlay_show");
    }
  }

  _handelEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  closeHandler(evt) {
    return evt.target.classList.contains(".form__dialog");
  }

  setEventListener() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    this._popupSelector.addEventListener("click", (evt) => {
      if (this.closeHandler(evt)) {
        this.close();
      }
    });
  }
}
