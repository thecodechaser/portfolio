let button = document.querySelector(".menu-button-btn");

function display() {
  let menuContainer = document.querySelector(".mobile-menu-container");
  menuContainer.style.display = "block";
  let buttonContainer = document.querySelector(".btn-container-open");

  buttonContainer.style.display = "none";
}

let button2 = document.querySelector(".menu-button-btn-close");

function display2() {
  let menuContainer = document.querySelector(".mobile-menu-container");
  menuContainer.style.display = "none";
  let buttonContainer = document.querySelector(".btn-container-open");

  buttonContainer.style.display = "block";
}

button.addEventListener("click", display);
button2.addEventListener('click', display2);
