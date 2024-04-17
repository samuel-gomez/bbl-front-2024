import Menu from "./components/menu/menu.js";
import Copy from "./components/copy/copy.js";

const menu = new Menu();
const copy = new Copy();

document.addEventListener("DOMContentLoaded", () => {
  menu.init();
  copy.init();
});
