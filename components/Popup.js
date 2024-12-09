export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._popupOverlay = this._popupSelector.querySelector(".popup__overlay");
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
    document.addEventListener("keyup", (evt) => {
      if (evt.key === "Escape") {
        this._popupSelector.classList.remove("popup__show");
      }
    });
  }

  _handlecloseClick() {
    this._popupSelector.addEventListener("click", (evt) => {
      if (
        evt.target === this._popupSelector ||
        evt.target.classList.contains("popup__overlay")
      ) {
        this.close();
      }
    });
  }

  setEventListener() {
    this._handelEscClose();
    this._handlecloseClick();

    const closeButton = this._popupSelector.querySelector(".close__button");
    closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
