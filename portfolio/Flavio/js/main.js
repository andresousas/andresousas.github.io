// Select DOM Items
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navLinks = document.querySelectorAll('.nav-item');

// Initial State
let showMenu = false;

menuToggle.addEventListener('click', toggleMenu);

function toggleMenu () {
  if (!showMenu) {
    menuToggle.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navLinks.forEach(item => item.classList.add('show'));
    // Reset
    showMenu = true;
  } else {
    menuToggle.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navLinks.forEach(item => item.classList.remove('show'));
    // Reset
    showMenu = false;
  }
};