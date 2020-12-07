import menu from '../menu.json';
import items from '../templates/gallery-items.hbs';

const menuRef = document.querySelector('.js-menu');
const themeSwitchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const markup = items(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



menuRef.insertAdjacentHTML('beforeend', markup);



if (localStorage.getItem('DARK')) {
  bodyRef.classList.add(Theme.DARK);
  themeSwitchRef.checked = true;
}

themeSwitchRef.addEventListener('change', changeThemes);

function changeThemes() {
  if (themeSwitchRef.checked) {
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('DARK', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    localStorage.removeItem('DARK');
  }
}
