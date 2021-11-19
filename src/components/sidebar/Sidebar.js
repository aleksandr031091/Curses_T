import SidebarStyled from "./SidebarStyled";
import sprite from "../../image/sprite.svg";

const Sidebar = ({ onOpenBar, course, idxModule, onHandleClickModule }) => {
  const onBtnClose = () => onOpenBar(false);

  const onHandleClick = (idx) => (e) => {
    onHandleClickModule(idx);
  };

  return (
    <SidebarStyled>
      <div className="modal_wrapper">
        <button className="Btn" onClick={onBtnClose}>
          <svg className="FooterIcon" width="18" height="18">
            <use href={sprite + "#icon-close"}></use>
          </svg>
        </button>
        <p className="curse_title">{course.title}</p>
        <ul>
          {course.module.map((module) => (
            <li
              className={
                course.module.indexOf(module) === idxModule
                  ? "focus-module_list_item module_list_item"
                  : "module_list_item"
              }
              key={course.module.indexOf(module)}
              onClick={onHandleClick(course.module.indexOf(module))}
            >
              <p className="module_name">{module.title}</p>
              <p className="module_status">{module.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
