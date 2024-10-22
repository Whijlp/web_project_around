const settingsValidation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".forms__submit-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "popup__error_visible",
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
          errorElement.textContent = inputElement.validationMessage;
          inputElement.classList.add(settings.inputErrorClass);
          submitButton.disabled = true;
        } else {
          inputElement.classList.remove(settings.inputErrorClass);
          submitButton.disabled = false;
          errorElement.textContent = "";
        }
      });
    });
  });
};
enableValidation(settingsValidation);
