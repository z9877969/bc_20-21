import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalContainer = document.getElementById("modal");

const Modal = ({ children }) => {
  return createPortal(
    <div className={s.backdrop}>{children}</div>,
    modalContainer
  );
};

export default Modal;
