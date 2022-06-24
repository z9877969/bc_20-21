"use strict";
/*
 * Події елементів форм. focus, blur, change, input, submit
 */
const formInputEl = document.querySelector(".js-username-input");
const userNameOutputEl = document.querySelector(".js-username-output");
const formCheckboxEl = document.querySelector(".js-policy-checkbox");
const formSubmitBtnEl = document.querySelector(".js-contact-form-submit");
const contactFormEl = document.querySelector(".js-contact-form");

formInputEl.addEventListener("focus", () => {
  formInputEl.style.outline = "2px solid green";
});

formInputEl.addEventListener("blur", () => {
  //   formInputEl.style.outline = "2px solid red";
  //   console.dir(formInputEl.value);
});

formCheckboxEl.addEventListener("change", (event) => {
  if (event.target.checked && formInputEl.value !== "") {
    formSubmitBtnEl.disabled = false;
  }
});

formInputEl.addEventListener("input", (event) => {
  userNameOutputEl.textContent = event.target.value;
});

contactFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const { username, "policy-accept": checkbox } = event.target.elements;

  console.log(event.target.elements);

  const dataForm = {
    username: username.value,
    // [username.name]: username.value,
    [checkbox.name]: checkbox.value,
  };
  console.log(dataForm);
});
