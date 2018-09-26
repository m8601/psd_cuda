const menuBtn = document.querySelector('.navigation-menu_button');
const topBar = document.querySelector('.menu-btn__top');
const middleBar = document.querySelector('.menu-btn__middle');
const bottomBar = document.querySelector('.menu-btn__bottom');
const menu = document.querySelector('.navigation-menu__menu');
const menuItems = document.querySelectorAll('.navigation-menu__menuItem');

const closeMenu = () => {
  menuBtn.classList.remove('navigation-menu_button--open');
  // Animate button
  topBar.classList.remove('menu-btn__top--open');
  topBar.classList.add('menu-btn__top--close');
  middleBar.classList.remove('menu-btn__middle--open');
  middleBar.classList.add('menu-btn__middle--close');
  bottomBar.classList.remove('menu-btn__bottom--open');
  bottomBar.classList.add('menu-btn__bottom--close'); 
  // Close menu
  menu.classList.remove('navigation-menu__menu--open');
}

const openMenu = () => {
  menuBtn.classList.add('navigation-menu_button--open');
    // Animate button
    topBar.classList.remove('menu-btn__top--close'); 
    topBar.classList.add('menu-btn__top--open'); 
    middleBar.classList.remove('menu-btn__middle--close'); 
    middleBar.classList.add('menu-btn__middle--open'); 
    bottomBar.classList.remove('menu-btn__bottom--close'); 
    bottomBar.classList.add('menu-btn__bottom--open');
    // Open menu
    menu.classList.add('navigation-menu__menu--open');
}

menuBtn.addEventListener('click', () => {
  if(!menuBtn.classList.contains('navigation-menu_button--open')){
    openMenu();
  } else {
    closeMenu();
  }
  
})

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    closeMenu();
  })
})