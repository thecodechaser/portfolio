const form = document.querySelector('.form-element');
const message = 'Email must contain only lower case characters';

function showMessage(input, message) {
  const msg = document.querySelector('.validation-msg');
  msg.innerHTML = `<p class="error-msg">${message}</p>`;
}

function validateEmail(input) {
  const value = input.toLowerCase();
  if (value.localeCompare(input) === 0) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (event) => {
  const msg = document.querySelector('.validation-msg');
  event.preventDefault();
  const input = form.elements[1];
  const emailValid = validateEmail(input.value);
  if (emailValid) {
    msg.remove();
    form.submit();
    form.reset();
  } else {
    showMessage(input, message, false);
  }
});
