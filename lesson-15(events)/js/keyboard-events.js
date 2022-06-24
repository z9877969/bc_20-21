"use strict";
/*
 * Події клавіатури. keypress, keydown, keyup
 */

const paragraphEl = document.querySelector(".js-output");

document.addEventListener("keyup", (event) => {
  console.log(event);
  paragraphEl.insertAdjacentHTML("afterbegin", `Key - ${event.key} <br/> KeyCode - ${event.code} <hr/> `)

});
