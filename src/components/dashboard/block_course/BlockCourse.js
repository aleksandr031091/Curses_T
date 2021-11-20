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
      <h2 className="block_title">
        {!load ? (
          <Skeleton width="150px" />
        ) : (
          `${blockName} (${showTotalMoules(blockName)})`
        )}
      </h2>
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
              <p className="curse_title">{curse.title}</p>
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
