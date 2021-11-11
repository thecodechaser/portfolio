const form = document.querySelector('.form-element');
const message = "Email must contain only lower case characters";

function showMessage(input, message) {
  const msg = document.querySelector('.validation-msg');
  msg.innerHTML = `<p class="error-msg">${message}</p>`;
}

function validateEmail(input) {
  const value = input.value;
  const value1 = value.toLowerCase();
  if (value.localeCompare(value1) == 0) {
    return true;
  } else {
    false;
  }
}

form.addEventListener('submit', function (event) {
  const msg = document.querySelector('.validation-msg');
  event.preventDefault();
  let input = form.elements['email'];
  const emailValid = validateEmail(input);
  if (emailValid) {
    msg.remove();
    form.submit();
    form.reset();
  } else {
    showMessage(input, message, false);
  }
});
