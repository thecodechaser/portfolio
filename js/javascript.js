let button = document.querySelector(".btn-open");
let button2 = document.querySelector(".btn-close");

function display() {
  let menuContainer = document.querySelector(".mobile-menu-container");
  menuContainer.style.display = "block";
  let buttonContainer = document.querySelector(".btn-container-open");
  buttonContainer.style.display = "none";
}

function display2() {
  let menuContainer = document.querySelector(".mobile-menu-container");
  menuContainer.style.display = "none";
  let buttonContainer = document.querySelector(".btn-container-open");
  buttonContainer.style.display = "block";
}

button.addEventListener("click", display);
button2.addEventListener("click", display2);
