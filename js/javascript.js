const button = document.querySelector('.btn-open');
const button2 = document.querySelector('.btn-close');
const menuItems = document.querySelectorAll('.menu-item2');

function display() {
  const menuContainer = document.querySelector('.mobile-menu-container');
  menuContainer.style.display = 'block';
  const buttonContainer = document.querySelector('.btn-container-open');
  buttonContainer.style.display = 'none';
}

function display2() {
  const menuContainer = document.querySelector('.mobile-menu-container');
  menuContainer.style.display = 'none';
  const buttonContainer = document.querySelector('.btn-container-open');
  buttonContainer.style.display = 'block';
}

button.addEventListener('click', display);
button2.addEventListener('click', display2);

menuItems.forEach((item) => {
  item.addEventListener('click', display2);
});
