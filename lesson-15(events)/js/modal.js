"use strict";

const backdropEl = document.querySelector(".js-backdrop");
const openModalBtnEl = document.querySelector(".js-modal-open");
const closeModalBtnEl = document.querySelector(".js-modal-close");

const handleCloseByEsc = (event) => {
  if (event.code === "Escape") {
    handleCloseModal();
  }
};

openModalBtnEl.addEventListener("click", (event) => {
    backdropEl.classList.add("is-open");
  
    document.addEventListener("keydown", handleCloseByEsc);
});

const handleCloseModal = () => {
    backdropEl.classList.remove("is-open");
    document.removeEventListener("keydown", handleCloseByEsc);
};

closeModalBtnEl.addEventListener("click", handleCloseModal);

