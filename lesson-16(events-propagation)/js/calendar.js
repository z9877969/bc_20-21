"use strict";
const calendarEl = document.querySelector(".calendar");
let prevTdEl = null;

const handleTableClick = (event) => {
  const element = event.target;
  if (element.nodeName === "TH" || element.textContent === "") {
    return;
  }

  // if (prevTdEl === null) {
  //   element.classList.add("active");
  //   prevTdEl = element;
  //   return;
  // }

  if (prevTdEl === element) {
    element.classList.toggle("active");
    return;
  }

  prevTdEl?.classList.remove("active"); // false
  element.classList.add("active");
  prevTdEl = element;
};

calendarEl.addEventListener("click", handleTableClick);
