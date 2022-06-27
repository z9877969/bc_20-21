'use strict';

// class Menu {
//   #menuEl;

//   constructor(rootSelector) {
//     this.#menuEl = rootSelector;

//     this.#menuEl.addEventListener('click', this.onMenuBtnElClick.bind(this));
//   }

//   load() {
//     console.log('loading...');
//   }

//   save() {
//     console.log('saving...');
//   }

//   search() {
//     console.log('searching...');
//   }

//   onMenuBtnElClick(event) {
//     const { target: menuBtnEl } = event;

//     if (menuBtnEl.nodeName !== 'BUTTON') {
//       return;
//     }

//     const btnAction = menuBtnEl.dataset.action;

//     this[btnAction]();
//   }
// }

// new Menu(document.querySelector('.js-menu'));
