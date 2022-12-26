const menuList = document.querySelector('.menu-js');
const buttonMenu = document.querySelector('.button-js');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.main-nav__link');


function closeMenu() {
  if (body.classList.contains('overlay') && menuList.classList.contains('main-nav__list--nojs--open')) {
    menuList.classList.remove('main-nav__list--nojs--open');
    body.classList.remove('overlay');
    buttonMenu.classList.toggle('button-menu__icon--close');
  }
}

function openMenu() {
  body.classList.toggle('overlay');
  menuList.classList.toggle('main-nav__list--nojs--open');
  buttonMenu.classList.toggle('button-menu__icon--close');
}

export default function initNoJs() {
  if (menuList.classList.contains('main-nav__list--nojs--open')) {
    menuList.classList.remove('main-nav__list--nojs--open');
    buttonMenu.addEventListener('click', openMenu);
    for (let menuLink of menuLinks) {
      menuLink.addEventListener('click', closeMenu);
    }
    document.addEventListener('click', (e)=>{
      let target = e.target;
      if (target !== menuList && target !== buttonMenu && menuList.classList.contains('main-nav__list--nojs--open')) {
        closeMenu();
      }
    });
  }
}
