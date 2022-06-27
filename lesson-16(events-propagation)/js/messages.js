"use strict";
const messagesWrapper = document.querySelector(".js-messages-wrapper");
// const btnsEl = document.querySelectorAll(".message__close-btn");

const handleCloseBtnClick = (e) => {
  const elem = e.target;
    console.log("Hello");

  if (elem.nodeName !== "BUTTON") {
    return;
  }

  const itemEl = elem.closest(".message");
  //   itemEl.style.display = "none";
  itemEl.remove();

  if (!messagesWrapper.children.length) {
    messagesWrapper.removeEventListener("click", handleCloseBtnClick);
  }

  console.log(messagesWrapper.children);
  //   console.log(itemEl);
};

messagesWrapper.addEventListener("click", handleCloseBtnClick);