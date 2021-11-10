const form = document.querySelector(".form-element");
const message = "Please enter email address in lower case";

function showMessage(input, message) {
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;
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

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let input = form.elements["email"];
  const emailValid = validateEmail(input);
  if (emailValid) {
    form.submit();
    form.reset();
  } else {
    showMessage(input, message, false);
  }
});
