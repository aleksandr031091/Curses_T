import CurseModules from "../curse_modules/CurseModules";
import Skeleton from "react-loading-skeleton";

const BlockCourse = ({
  load,
  showTotalMoules,
  searcTermhResult,
  courseState,
  onHandleClickCard,
  idxModuleState,
  onHandleClickModule,
  blockName,
}) => {
  return (
    <div className="block_curses">
      {!load ? (
        <div className="block_title_wrapper">
          <div className="block_title">
            <Skeleton width="120px" />
          </div>
          <Skeleton width="25px" height="25px" circle="50%" />
        </div>
      ) : (
        <div className="block_title_wrapper">
          <h2 className="block_title">{blockName}</h2>
          <p className="title_item">({showTotalMoules(blockName)})</p>
        </div>
      )}

      <ul className="block_list">
        {searcTermhResult.map((curse) => (
          <li
            key={curse.id}
            className={
              curse.id === courseState.id
                ? "focus-curses_card curses_card"
                : "curses_card"
            }
            onClick={onHandleClickCard(curse.id)}
          >
            {!load ? (
              <Skeleton className="curse_title" width="200px" />
            ) : (
              <div className="card_head_wrapper">
                {curse.title !== "" && (
                  <p className="curse_title">{curse.title}</p>
                )}

                {curse.autor && <p className="course_autor">{curse.autor}</p>}

                {curse.active && (
                  <p className="course_active">{curse.active}</p>
                )}

                {curse.priority && (
                  <p className="course_priority">{curse.priority}</p>
                )}

                {curse.description && (
                  <p className="course_description">{curse.description}</p>
                )}
              </div>
            )}
            <CurseModules
              modules={curse.module}
              status={blockName}
              idxModule={idxModuleState}
              onHandleClickModule={onHandleClickModule}
              load={load}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlockCourse;
