export default class FormValidator {
  constructor(formValid, formElement) {
    this._formValid = formValid;
    this._formElement = formElement;
  }

  _showError(inputElement, errorElement, formValid) {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(formValid.inputErrorClass);
  }
  _hideError(inputElement, errorElement, formValid) {
    inputElement.classList.remove(formValid.inputErrorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(formElement, inputElement, formValid) {
    const errorElement = formElement.querySelector(
      `#${inputElement.name}-error`
    );
    if (!inputElement.checkValidity()) {
      this._showError(inputElement, errorElement, formValid);
    } else {
      this._hideError(inputElement, errorElement, formValid);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.checkValidity();
    });
  }

  _toogleButton(inputList, submitButton) {
    if (this._hasInvalidInput(inputList)) {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  }

  _resetForm() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._formValid.inputSelector)
    );
    inputList.forEach((inputElement) => {
      const errorElement = this._formElement.querySelector(
        `#${inputElement.name}-error`
      );
      inputElement.value = "";
      inputElement.classList.remove(this._formValid.inputErrorClass);
      errorElement.textContent = "";
    });
  }

  _setProperties(formElement, formValid) {
    const inputList = Array.from(
      formElement.querySelectorAll(formValid.inputSelector)
    );

    const submitButton = formElement.querySelector(
      formValid.submitButtonSelector
    );

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, formValid);
        this._hasInvalidInput(inputList);
        this._toogleButton(inputList, submitButton);
      });
    });
  }

  enableValidation() {
    this._setProperties(this._formElement, this._formValid);
  }
}
