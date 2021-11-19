import { Children, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import SidebarStyled from "./SidebarStyled";

const Sidebar = ({ onOpenBar }) => {
  const onBtnClose = () => onOpenBar(false);

  return (
    <SwitchTransition>
      <CSSTransition
        classNames="fade"
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
      >
        <SidebarStyled>
          <div className="modal_wrapper">
            <button className="Btn" onClick={onBtnClose}>
              Close
            </button>
          </div>
        </SidebarStyled>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Sidebar;
