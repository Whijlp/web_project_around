class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  open() {
    this.formsPopup = this._popupSelector.classList.add("popup__show");
    this.overlayContainer = this._popupSelector.classList.add("overlay_show");
  }

  close() {
    this.formsPopup = this._popupSelector.classList.remove("popup__show");
  }

  _handelEscClose(evt) {
    if (evt.key === "Escape") {
      this.close(evt);
    }
  }

  setEventListener() {
    this._popupSelector.addEventListener("click", (evt) => {
      evt.preventDefault();
    });
  }
}
git;
