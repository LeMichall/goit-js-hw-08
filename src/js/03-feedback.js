var throttle = require('lodash.throttle');
const inputEmail = document.querySelector(`input[name="email"]`);
const inputMessage = document.querySelector(`textarea[name="message"]`);
const form = document.querySelector(`.feedback-form`);
const inputData = {
  email: '',
  message: '',
};
// saving values in local storage
function localSave() {
  inputData.email = inputEmail.value;
  inputData.message = inputMessage.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}
// loading values from local storage
function localLoad() {
  const savedData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || '';
  inputEmail.value = savedData.email || '';
  inputMessage.value = savedData.message || '';
}
// clearing inputs and local storage
function localSubmit(event) {
  event.preventDefault();
  console.log(inputData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
window.addEventListener('load', localLoad);
form.addEventListener('submit', localSubmit);
form.addEventListener('input', throttle(localSave, 500));
