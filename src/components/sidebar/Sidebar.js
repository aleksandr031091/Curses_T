import SidebarStyled from "./SidebarStyled";
import { nanoid } from "nanoid";

const Sidebar = ({ onOpenBar, cours, idxModule, onHandleClickModule }) => {
  const onBtnClose = () => onOpenBar(false);

  const onHandleClick = (idx) => () => {
    onHandleClickModule(idx);
  };

  return (
    <SidebarStyled>
      <div className="modal_wrapper">
        <button className="Btn" onClick={onBtnClose}>
          Close
        </button>
        <h3>{cours.title}</h3>
        <ul>
          {cours.module.map((module) => (
            <li
              className="module_list_item"
              key={nanoid()}
              onClick={onHandleClick(cours.module.indexOf(module))}
            >
              <p className="module_name">{module.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
