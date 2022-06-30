'use strict';

import localStorageService from './localstorage';
const CONTACT_FORM_LOCAL_STORAGE_KEY = 'formData';
const contactFormEl = document.querySelector('.js-contact-form');

const dataForm = {};

console.log(localStorageService);

// const serializedState = localStorage.getItem("qwe");
// console.log(serializedState); // null

const handleFormChange = e => {
  const { target } = e;

  const elementTargetName = target.name;
  const elementTargetValue = target.value;

  dataForm[elementTargetName] = elementTargetValue;

  //   localStorage.setItem(
  //     CONTACT_FORM_LOCAL_STORAGE_KEY,
  //     JSON.stringify(dataForm)
  //   );
  localStorageService.save(CONTACT_FORM_LOCAL_STORAGE_KEY, dataForm);
};

const fillContactForm = () => {
  //   const formData = JSON.parse(
  //     localStorage.getItem(CONTACT_FORM_LOCAL_STORAGE_KEY)
  //   );

  const formData = localStorageService.load(CONTACT_FORM_LOCAL_STORAGE_KEY);

  console.dir(contactFormEl.elements);

  for (const key in formData) {
    const inputEl = contactFormEl.elements[key];
    const inputValue = formData[key];
    inputEl.value = inputValue;
  }
};

const handleContactFormSybmit = e => {
  e.preventDefault();

  //   localStorage.removeItem(CONTACT_FORM_LOCAL_STORAGE_KEY);
  localStorageService.remove(CONTACT_FORM_LOCAL_STORAGE_KEY);
  e.currentTarget.reset();
  for (const key in dataForm) {
    delete dataForm[key];
  }

  console.log(dataForm);
};

fillContactForm();

contactFormEl.addEventListener('change', handleFormChange);
contactFormEl.addEventListener('submit', handleContactFormSybmit);


