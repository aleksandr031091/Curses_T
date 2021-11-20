import Skeleton from "react-loading-skeleton";
import SidebarStyled from "./SidebarStyled";
import sprite from "../../image/sprite.svg";

const Sidebar = ({
  onOpenBar,
  course,
  idxModule,
  onHandleClickModule,
  load,
}) => {
  const onBtnClose = () => onOpenBar(false);

  const onHandleClick = (idx) => () => {
    onHandleClickModule(idx);
  };

  return (
    <SidebarStyled>
      <button className="Btn" onClick={onBtnClose}>
        <svg width="18" height="18">
          <use href={sprite + "#icon-close"}></use>
        </svg>
      </button>
      {!load ? (
        <Skeleton className="curse_title" width="200px" height="25px" />
      ) : (
        <p className="curse_title">{course.title}</p>
      )}

      <ul>
        {course.module.map((module) =>
          !load ? (
            <li
              className="sidebar_list_item"
              key={course.module.indexOf(module)}
            >
              <div className="sidebar_name">
                <Skeleton width="150px" height="25px" />
              </div>

              <div className="sidebar_status">
                <Skeleton width="80px" height="15px" />
              </div>
            </li>
          ) : (
            <li
              className={
                course.module.indexOf(module) === idxModule
                  ? "focus-sidebar_list_item sidebar_list_item"
                  : "sidebar_list_item"
              }
              key={course.module.indexOf(module)}
              onClick={onHandleClick(course.module.indexOf(module))}
            >
              <p className="sidebar_name">{module.title}</p>
              <p className="sidebar_status">{module.status}</p>
            </li>
          )
        )}
      </ul>
    </SidebarStyled>
  );
};

export default Sidebar;
