import $ from "../../js/selector.js";
import $$ from "../../js/selectorAll.js";

const prefix = "sg";
const prefixjs = "js";

const classCode = `.${prefixjs}-code`;
const TEXT_COPY = "Copy code";

class Copy {
  constructor() {
    this.codeElements = $$($("reveal"))(classCode);
  }

  init() {
    if (this.isNotExitingElement()) {
      return;
    }
    this.initAppendCopy();
    this.initEvents();
  }

  initAppendCopy() {
    const buttonCopy = `<button class="${prefix}-copy ${prefixjs}-copy">${TEXT_COPY}</button>`;

    [...this.codeElements].forEach((codeElt) => {
      codeElt.outerHTML = `<div class="${prefix}-wrapper-copy">${codeElt.outerHTML}${buttonCopy}</div>`;
    });
  }

  initEvents() {
    const buttonsCopy = $$($("reveal"))(".js-copy");

    [...buttonsCopy].forEach((buttonCopy) => {
      buttonCopy.addEventListener("click", (e) => {
        e.preventDefault();
        const button = e.target;
        button.classList.add(`${prefix}-copy--copied`);
        const wrapper = e.currentTarget.closest(`.${prefix}-wrapper-copy`);
        const input = wrapper.nextElementSibling;
        navigator.clipboard.writeText(input.value);
        button.textContent = "Copied !";
        setTimeout(() => {
          button.classList.remove(`${prefix}-copy--copied`);
          button.textContent = TEXT_COPY;
        }, 1000);
      });
    });
  }

  isNotExitingElement() {
    return !this.codeElements;
  }
}

export default Copy;
