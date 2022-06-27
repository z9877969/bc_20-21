"use strict";
/*
 * Поширення подій (занурення, таргетинг, спливання) | {capture: true, once: true}
 */

const textEl = document.querySelector(".text");
const divEl = document.querySelector(".div");
const sectionEl = document.querySelector(".section");

const handleTextElClick = (event) => {
  console.group("Listner on textEl");
  console.log("event.target :>> ", event.target);
  console.log("event.currentTarget :>> ", event.currentTarget);
  console.groupEnd();
};

const handleDivElClick = (event) => {
  console.group("Listner on divEl");
  console.log("event.target :>> ", event.target);
  console.log("event.currentTarget :>> ", event.currentTarget);
  console.groupEnd();
};

const handleTextSectionElClick = (event) => {
  console.group("Listner on sectionEl");
  console.log("event.target :>> ", event.target);
  console.log("event.currentTarget :>> ", event.currentTarget);
  console.groupEnd();
};

textEl.addEventListener("click", handleTextElClick);
divEl.addEventListener("click", handleDivElClick, { capture: true });
sectionEl.addEventListener("click", handleTextSectionElClick);
