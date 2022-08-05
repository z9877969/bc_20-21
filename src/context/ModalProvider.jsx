import { createContext, useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const handleCloseModalByEsc = (e) => {
    if (e.code !== "Escape") return;
    setModal(null);
  };

  useEffect(() => {
    if (modal) {
      window.addEventListener("keydown", handleCloseModalByEsc);
    } else {
      window.removeEventListener("keydown", handleCloseModalByEsc);
    }
  }, [modal]);

  return (
    <ModalContext.Provider value={setModal}>
      {children}
      {modal && (
        <div onClick={() => setModal(null)}>
          (<Modal>{modal}</Modal>)
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
