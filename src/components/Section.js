export default class Section {
  constructor({ items, renderer }, cardSelector) {
    this._renderItems = items;
    this._renderer = renderer;
    this._cardSelector = document.querySelector(cardSelector);
  }

  renderer() {
    this._renderItems.forEach((item) => {
      this.addItem(this._renderer(item));
    });
  }

  addItem(element) {
    this._cardSelector.prepend(element);
  }
}
