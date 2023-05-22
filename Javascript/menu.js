const menuContainer = document.querySelector('#mobile-menu');
const hamburguer = document.querySelector('#hamburger-container');
const x = document.querySelector('#x-container');

function showMenu() {
  menuContainer.style.display = 'flex';
}

function closeMenu() {
  menuContainer.style.display = 'none';
}

hamburguer.addEventListener('click', showMenu);
x.addEventListener('click', closeMenu);
