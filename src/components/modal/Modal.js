import { Children, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import ModalStyled from "./ModalStyled";

const Modal = ({ children, handleCloseModal }) => {
  const onBtnClose = () => handleCloseModal();

  return (
    <SwitchTransition>
      <CSSTransition
        classNames="fade"
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
      >
        <ModalStyled>
          <div className="modal_wrapper">
            <button className="Btn" onClick={onBtnClose}>
              Close
            </button>
            {children}
          </div>
        </ModalStyled>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Modal;
