export default (selector, parent = document) =>
  parent.querySelector(`.${selector}`);
