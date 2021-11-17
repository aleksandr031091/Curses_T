import { Children, useState } from "react";
import ModalStyled from "./ModalStyled";

const Modal = ({ children, handleCloseModal }) => {
  const onBtnClose = () => handleCloseModal();

  return (
    <ModalStyled>
      <button className="Btn" onClick={onBtnClose}>
        Close
      </button>
      {children}
    </ModalStyled>
  );
};

export default Modal;
