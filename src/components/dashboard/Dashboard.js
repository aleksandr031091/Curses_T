import curses from "../curses.json";
import CurseModules from "./curse_modules/CurseModules";
import { useEffect, useState } from "react";

import Header from "../header_dashboard/Header";
import Sidebar from "../sidebar/Sidebar";
import DashboardStyled from "./DashboardStyled";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Deshboard = () => {
  const [stateBar, setStateBar] = useState(false);

  // ====================== on click course ======================
  const [courseState, setCourseState] = useState({});
  const [idxModuleState, setIdxModuleState] = useState(null);

  const onHandleClickCard = (id) => (e) => {
    const cours = curses.find((cours) => cours.id === id);
    setCourseState(cours);
    setStateBar(true);
  };

  const onHandleClickModule = (idx) => {
    setIdxModuleState(idx);
  };
  // ====================== on click course ======================

  // ====================== Search content======================
  const [search, setSearch] = useState("");
  const [searcTermhResult, setSearcTermhResult] = useState([]);

  useEffect(() => {
    setSearcTermhResult(curses);
  }, []);

  const onHandleSearch = (value) => {
    setSearch(value);

    if (value !== "") {
      const newArrCurses = curses.filter((curse) => {
        return (
          curse.title.toLowerCase().includes(value.toLowerCase()) ||
          curse.module.some(({ title }) =>
            title.toLowerCase().includes(value.toLowerCase())
          )
        );
      });
      setSearcTermhResult(newArrCurses);
    } else {
      setSearcTermhResult(curses);
    }
  };
  // ====================== Search content======================

  // ====================== Total modules ======================
  const showTotalMoules = (string) => {
    let totalModules = 0;
    let totalBlockModules = 0;
    searcTermhResult.forEach((course) => {
      totalModules += course.module.length;
      totalBlockModules += course.module.filter(
        (el) => el.status === string
      ).length;
    });
    if (!string) {
      return totalModules;
    }
    return totalBlockModules;
  };
  // ====================== Total modules ======================

  // ====================== Sceleton ======================
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 3000);
  }, []);
  // ====================== Sceleton ======================

  return (
    // <ContextCard.Provider>
    <DashboardStyled load={load}>
      <SkeletonTheme baseColor="#8d8d8d" highlightColor="#cecece">
        <Header
          term={search}
          searchKeyword={onHandleSearch}
          totalModules={showTotalMoules()}
          totalCurses={curses.length}
          load={load}
        />

        <div className="content_board">
          <div className="block_wrapper">
            <div className="block_curses">
              <h2 className="block_title">
                {!load ? (
                  <Skeleton width="150px" />
                ) : (
                  `In progress (${showTotalMoules("in progress")})`
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
                      status="in progress"
                      idxModule={idxModuleState}
                      onHandleClickModule={onHandleClickModule}
                      load={load}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="block_curses">
              <h2 className="block_title">
                {!load ? (
                  <Skeleton width="150px" />
                ) : (
                  `Submitted (${showTotalMoules("submitted")})`
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
                      status="submitted"
                      idxModule={idxModuleState}
                      onHandleClickModule={onHandleClickModule}
                      load={load}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="block_curses">
              <h2 className="block_title">
                {!load ? (
                  <Skeleton width="150px" />
                ) : (
                  `Ready to submit to peer review
                   (${showTotalMoules("ready to submit to peer review")})`
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
                      status="ready to submit to peer review"
                      idxModule={idxModuleState}
                      onHandleClickModule={onHandleClickModule}
                      load={load}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="block_curses">
              <h2 className="block_title">
                {!load ? (
                  <Skeleton width="150px" />
                ) : (
                  `Complete (${showTotalMoules("complete")})`
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
                      status="complete"
                      idxModule={idxModuleState}
                      onHandleClickModule={onHandleClickModule}
                      load={load}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="block_curses">
              <h2 className="block_title">
                {!load ? (
                  <Skeleton width="150px" />
                ) : (
                  `Complete (${showTotalMoules("complete")})`
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
                      status="complete"
                      idxModule={idxModuleState}
                      onHandleClickModule={onHandleClickModule}
                      load={load}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="block_curses">
              <h2 className="block_title">
                {!load ? (
                  <Skeleton width="150px" />
                ) : (
                  `Complete (${showTotalMoules("complete")})`
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
                      status="complete"
                      idxModule={idxModuleState}
                      onHandleClickModule={onHandleClickModule}
                      load={load}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {stateBar && (
            <Sidebar
              onOpenBar={setStateBar}
              course={courseState}
              idxModule={idxModuleState}
              onHandleClickModule={onHandleClickModule}
              load={load}
            />
          )}
        </div>
      </SkeletonTheme>
    </DashboardStyled>
    // </ContextCard.Provider>
  );
};

export default Deshboard;
