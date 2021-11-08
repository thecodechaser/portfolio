let button = document.querySelector(".menu-button-btn");

function display() {
  let menuContainer = document.querySelector(".mobile-menu-container");
  menuContainer.style.display = "block";
  let buttonContainer = document.querySelector(".btn-container-open");

  buttonContainer.style.display = "none";
}

button.addEventListener("click", display);