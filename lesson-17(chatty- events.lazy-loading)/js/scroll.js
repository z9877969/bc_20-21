"use strict";

const sectionEl = document.querySelector(".js-animated-section");

const randomColor = () =>
  "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();

document.querySelectorAll(".section").forEach((section) => {
  section.style.backgroundColor = randomColor();
});

const handleSectionScroll = () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 400) {
    sectionEl.classList.add("active");
    document.removeEventListener("scroll", handleThrottledScroll);
  }
};

const handleThrottledScroll = _.throttle(handleSectionScroll, 300);

document.addEventListener("scroll", handleThrottledScroll);

console.dir(_);
