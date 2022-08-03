import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalContainer = document.getElementById("modal");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleModalClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleModalClose);
  }

  handleModalClose = (e) => {
    console.log("Modal");
    if (e.target === e.currentTarget || e.code === "Escape") {
      this.props.setModalInfo();
    }
  };

  render() {
    const { modalInfo } = this.props;
    const { url, title } = modalInfo;

    return createPortal(
      <div className={s.backdrop} onClick={this.handleModalClose}>
        <h1 className={s.title}>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h1>
      </div>,
      modalContainer
    );
  }
}

export default Modal;
