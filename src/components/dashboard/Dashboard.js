import curses from "../curses.json";
import { createContext, useEffect, useRef, useState } from "react";

import Form from "../form/Form";

import DashboardStyled from "./DashboardStyled";

import CurseModules from "./curse_modules/CurseModules";
import Sidebar from "../sidebar/Sidebar";

const Deshboard = () => {
  const [stateBar, setStateBar] = useState(false);

  const [courseState, setCourseState] = useState({});
  const [idxModuleState, setIdxModuleState] = useState(null);

  // const ref = useRef();
  const [count, setCount] = useState();

  const onHandleClickCard = (id) => (e) => {
    const cours = curses.find((cours) => cours.id === id);
    // console.log(e.target);
    setCourseState(cours);
    // console.log(ref.current);
    // ref.current.style.color = "blue";
    setStateBar(true);
  };

  const onHandleClickModule = (idx) => {
    setIdxModuleState(idx);
  };

  // ======================Search content======================

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
  // ======================Search content======================

  const showTotalMoules = (string) => {
    let totalModules = 0;
    let totalBlockModules = 0;
    curses.forEach((course) => {
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

  return (
    // <ContextCard.Provider>
    <DashboardStyled>
      <Form
        term={search}
        searchKeyword={onHandleSearch}
        totalModules={showTotalMoules()}
      />

      <div className="content_board">
        <div className="block_wrapper">
          <div className="block_curses">
            <h2 className="block_title">
              In progress
              {` (${showTotalMoules("in progress")})`}
            </h2>

            <ul className="block_list">
              {searcTermhResult.map((curse) => (
                <li
                  key={curse.id}
                  className="curses_card"
                  onClick={onHandleClickCard(curse.id)}
                >
                  <p className="curse_title">{curse.title}</p>
                  <CurseModules
                    modules={curse.module}
                    status="in progress"
                    onHandleClickModule={onHandleClickModule}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="block_curses">
            <h2 className="block_title">
              Submitted
              {` (${showTotalMoules("submitted")})`}
            </h2>

            <ul className="block_list">
              {searcTermhResult.map((curse) => (
                <li
                  key={curse.id}
                  className="curses_card"
                  onClick={onHandleClickCard(curse.id)}
                >
                  <p className="curse_title">{curse.title}</p>
                  <CurseModules
                    modules={curse.module}
                    status="submitted"
                    onHandleClickModule={onHandleClickModule}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="block_curses">
            <h2 className="block_title">
              Ready to submit to peer review
              {` (${showTotalMoules("ready to submit to peer review")})`}
            </h2>

            <ul className="block_list">
              {searcTermhResult.map((curse) => (
                <li
                  key={curse.id}
                  className="curses_card"
                  onClick={onHandleClickCard(curse.id)}
                >
                  <p className="curse_title">{curse.title}</p>
                  <CurseModules
                    modules={curse.module}
                    status="ready to submit to peer review"
                    onHandleClickModule={onHandleClickModule}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="block_curses">
            <h2 className="block_title">
              Complete
              {` (${showTotalMoules("complete")})`}
            </h2>

            <ul className="block_list">
              {searcTermhResult.map((curse) => (
                <li
                  key={curse.id}
                  className="curses_card"
                  onClick={onHandleClickCard(curse.id)}
                >
                  <p className="curse_title">{curse.title}</p>
                  <CurseModules
                    modules={curse.module}
                    status="complete"
                    onHandleClickModule={onHandleClickModule}
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
          />
        )}
      </div>
    </DashboardStyled>
    // </ContextCard.Provider>
  );
};

export default Deshboard;
