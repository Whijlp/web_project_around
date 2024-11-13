export default class Section {
  constructor({ items, renderer }, cardSelector) {
    this._renderItems = items;
    this._renderer = renderer;
    this._cardSelector = document.querySelector(cardSelector);
  }

  renderer() {
    this._renderItems.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem() {
    this._cardSelector.prepend(element);
  }
}
