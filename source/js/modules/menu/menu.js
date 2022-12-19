const menuList = document.querySelector('.menu-js');
const buttonMenu = document.querySelector('.button-js');

function openMenu() {
  menuList.classList.toggle('main-nav__list--nojs--open');
  buttonMenu.classList.toggle('button-menu__icon--close');
}
export default function initNoJs() {
  if (menuList.classList.contains('main-nav__list--nojs--open')) {
    menuList.classList.remove('main-nav__list--nojs--open');
  }
  buttonMenu.addEventListener('click', openMenu);
}
