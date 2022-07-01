class Menu {
  constructor(rootSelector) {
    this.menu = document.querySelector(rootSelector);

    this.menu.addEventListener('click', this.onMenuBtnClick.bind(this));
  }

  load() {
    console.log('Loading...');
  }

  save() {
    console.log('Saving...');
  }

  search() {
    console.log('Saving...');
  }

  onMenuBtnClick = e => {
    if (e.target.nodeName !== 'BUTTON') return;

    const btnAction = e.target.dataset.action;

    this[btnAction]();
  };
}

new Menu('.js-menu');
new Menu('.js-second-menu');
