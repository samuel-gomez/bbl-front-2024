import $ from "../../js/selector.js";
import $$ from "../../js/selectorAll.js";

const prefix = "sg";
const prefixjs = "js";

const classBtnOpen = `${prefixjs}-img--open`;
const classBtnClose = `${prefixjs}-img--close`;
const openModifier = "opened";
const classMenu = `${prefixjs}-menu`;
const classMenuOpened = `${prefix}-menu--${openModifier}`;
const classMenuItems = `.${prefix}-menu__item-link`;

class Menu {
  constructor() {
    this.menu = $(classMenu);
    this.links = $$($(classMenu))(classMenuItems);
  }

  init() {
    if (this.isNotExitingElement()) {
      return;
    }
    this.initEvents();
  }

  initEvents() {
    $(classBtnOpen).addEventListener("click", (e) => {
      e.stopPropagation();
      this.openMenu();
    });
    $(classBtnClose).addEventListener("click", () => this.closeMenu());
    document.body.addEventListener("click", () => this.closeMenu());
    [...this.links].forEach((link) => {
      link.addEventListener("click", () => this.closeMenu());
    });
  }

  isNotExitingElement() {
    return !this.menu;
  }

  openMenu() {
    this.menu.classList.add(classMenuOpened);
  }

  closeMenu() {
    this.menu.classList.remove(classMenuOpened);
  }
}

export default Menu;
