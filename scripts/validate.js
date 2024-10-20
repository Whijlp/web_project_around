const settingsValidation = {
  formSelector: ".forms",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const enableValidation = () => {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach((formElement) => {});
};

/*function validProfile() {
  const jobInfoError = document.querySelector("#job_info-error");
  jobInfoError.classList.remove("form__input-error-invalid");
  const nombreError = document.querySelector("#nombre-error");
  nombreError.classList.remove("form__input-error-invalid");

  if (nameInput.checkValidity() && jobInput.checkValidity()) {
    formElement.disabled = false;
  } else {
    formElement.disabled = true;
    if (!jobInput.checkValidity()) {
      jobInfoError.classList.add("form__input-error-invalid");
    }
    if (!nameInput.checkValidity()) {
      nombreError.classList.add("form__input-error-invalid");
    }
  }
}
nameInput.addEventListener("input", validProfile);
jobInput.addEventListener("input", validProfile);
validProfile();

function validCard() {
  const titleCardError = document.querySelector("#form__title-error");
  titleCardError.classList.remove("form__input-error-card-invalid");
  const urlCardError = document.querySelector("#form__url-error");
  urlCardError.classList.remove("form__input-error-card-invalid");

  if (titleNewCard.checkValidity() && photoNewCard.checkValidity()) {
    createCardButton.disabled = false;
  } else {
    createCardButton.disabled = true;
    if (!titleNewCard.checkValidity()) {
      titleCardError.classList.add("form__input-error-card-invalid");
    }
    if (!photoNewCard.checkValidity()) {
      urlCardError.classList.add("form__input-error-card-invalid");
    }
  }
}
titleNewCard.addEventListener("input", validCard);
photoNewCard.addEventListener("input", validCard);
validCard();
*/
