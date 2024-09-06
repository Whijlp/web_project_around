const openProfilePopup = document.querySelector(".profile__edit-button");
const formsPopup = document.querySelector(".popup");
const closeProfilePopup = document.querySelector(".forms__close-button");
const overlayContainer = document.querySelector(".popup__overlay");
const formElement = document.querySelector(".forms__submit-button");
const nameInput = document.getElementById("nombre");
const jobInput = document.getElementById("job_info");
const nameElement = document.querySelector(".profile__title");
const jobElement = document.querySelector(".profile__subtitle");

openProfilePopup.addEventListener("click", handleOpenPopup);

closeProfilePopup.addEventListener("click", handleClosePopup);

formElement.addEventListener("click", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  handleClosePopup();
}

function handleOpenPopup() {
  formsPopup.classList.add("popup__show");
  fillFormInputs();
  overlayContainer.classList.add("overlay_show");
}

function handleClosePopup() {
  formsPopup.classList.remove("popup__show");
  overlayContainer.classList.remove("overlay_show");
}

function fillFormInputs() {
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
}
