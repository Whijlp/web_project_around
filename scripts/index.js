const openProfilePopup = document.querySelector(".profile__edit-button");
const formsPopup = document.querySelector(".popup");
const closeProfilePopup = document.querySelector(".forms__close-button");
const overlayContainer = document.querySelector(".popup__overlay");
const formElement = document.querySelector(".forms__submit-button");
const nameInput = document.getElementById("nombre");
const jobInput = document.getElementById("job_info");

console.log(nameInput);

openProfilePopup.addEventListener("click", function () {
  formsPopup.classList.add("popup__show");
  overlayContainer.classList.add("overlay_show");
  console.log("se ha echo clic en el boton");
});

closeProfilePopup.addEventListener("click", function () {
  formsPopup.classList.remove("popup__show");
  overlayContainer.classList.remove("overlay_show");
  console.log("se ha cerrado la ventana");
});

formElement.addEventListener("click", handleProfileFormSubmit);
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameElement = document.querySelector(".profile__title");
  const jobElement = document.querySelector(".profile__subtitle");
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  formsPopup.classList.remove("popup__show");
}
