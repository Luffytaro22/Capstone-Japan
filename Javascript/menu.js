const menuContainer = document.querySelector('#mobile-menu');
const hamburguer = document.querySelector('#hamburger-container');
const x = document.querySelector('#x-container');
const body = document.body;

function showMenu() {
  menuContainer.style.display = 'flex';
  body.style.position = 'fixed';
}

function closeMenu() {
  menuContainer.style.display = 'none';
  body.style.position = 'unset';
}

hamburguer.addEventListener('click', showMenu);
x.addEventListener('click', closeMenu);
