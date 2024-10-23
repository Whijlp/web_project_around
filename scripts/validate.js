export const settingsValidation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".forms__submit-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "popup__error_visible",
};

const showError = (inputElement, errorElement, settings) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(settings.inputErrorClass);
};

const hideError = (inputElement, errorElement, settings) => {
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = "";
};

const enableValidation = (settings) => {
  const formList = document.querySelectorAll(settings.formSelector);

  formList.forEach((formElement) => {
    const inputList = formElement.querySelectorAll(settings.inputSelector);
    const submitButton = formElement.querySelector(
      settings.submitButtonSelector
    );
    inputList.forEach((inputElement) => {
      const errorElement = formElement.querySelector(
        `#${inputElement.name}-error`
      );
      inputElement.addEventListener("input", () => {
        if (!inputElement.checkValidity()) {
          showError(inputElement, errorElement, settings);
          submitButton.disabled = true;
        } else {
          hideError(inputElement, errorElement, settings);
          submitButton.disabled = false;
        }
      });
    });
  });
};
enableValidation(settingsValidation);

export function resetFormValidation(settings) {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach((formElement) => {
    const submitButton = formElement.querySelector(
      settings.submitButtonSelector
    );
    const inputList = formElement.querySelectorAll(settings.inputSelector);
    inputList.forEach((inputElement) => {
      const errorElement = formElement.querySelector(
        `#${inputElement.name}-error`
      );
      hideError(inputElement, errorElement, settings);
      submitButton.disabled = true;
    });
  });
}
