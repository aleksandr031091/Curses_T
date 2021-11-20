import curses from "../curses.json";
import { useEffect, useState } from "react";
import Header from "../header_dashboard/Header";
import Sidebar from "../sidebar/Sidebar";
import BlockCourse from "./block_course/BlockCourse";

import DashboardStyled from "./DashboardStyled";
import { SkeletonTheme } from "react-loading-skeleton";
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
            <BlockCourse
              load={load}
              showTotalMoules={showTotalMoules}
              searcTermhResult={searcTermhResult}
              courseState={courseState}
              onHandleClickCard={onHandleClickCard}
              idxModuleState={idxModuleState}
              onHandleClickModule={onHandleClickModule}
              blockName="in progress"
            />

            <BlockCourse
              load={load}
              showTotalMoules={showTotalMoules}
              searcTermhResult={searcTermhResult}
              courseState={courseState}
              onHandleClickCard={onHandleClickCard}
              idxModuleState={idxModuleState}
              onHandleClickModule={onHandleClickModule}
              blockName="submitted"
            />

            <BlockCourse
              load={load}
              showTotalMoules={showTotalMoules}
              searcTermhResult={searcTermhResult}
              courseState={courseState}
              onHandleClickCard={onHandleClickCard}
              idxModuleState={idxModuleState}
              onHandleClickModule={onHandleClickModule}
              blockName="ready to submit to peer review"
            />

            <BlockCourse
              load={load}
              showTotalMoules={showTotalMoules}
              searcTermhResult={searcTermhResult}
              courseState={courseState}
              onHandleClickCard={onHandleClickCard}
              idxModuleState={idxModuleState}
              onHandleClickModule={onHandleClickModule}
              blockName="complete"
            />

            <BlockCourse
              load={load}
              showTotalMoules={showTotalMoules}
              searcTermhResult={searcTermhResult}
              courseState={courseState}
              onHandleClickCard={onHandleClickCard}
              idxModuleState={idxModuleState}
              onHandleClickModule={onHandleClickModule}
              blockName="complete"
            />

            <BlockCourse
              load={load}
              showTotalMoules={showTotalMoules}
              searcTermhResult={searcTermhResult}
              courseState={courseState}
              onHandleClickCard={onHandleClickCard}
              idxModuleState={idxModuleState}
              onHandleClickModule={onHandleClickModule}
              blockName="complete"
            />
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
