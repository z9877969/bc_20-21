"use strict";
const palletEl = document.querySelector(".js-pallet");
const palletItemEl = document.querySelectorAll(".js-pallet > li");

const randomColor = () => {
  return (
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
  );
};

palletItemEl.forEach((element) => {
  const color = randomColor();

  element.style.backgroundColor = color;
  element.dataset.color = color;
});

const handlePalletItemClick = (event) => {
  const itemEl = event.target;

  if (itemEl.nodeName !== "LI") {
    return;
  }

  const color = itemEl.dataset.color;

  const textEl = itemEl.querySelector(".pallet__item-color"); // span

  textEl.textContent = color
  // console.log(event.target);
};

palletEl.addEventListener("click", handlePalletItemClick);
