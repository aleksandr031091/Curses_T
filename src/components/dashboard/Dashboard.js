import curses from "../curses.json";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import Form from "../form/Form";

import useModal from "../../hooks/useModal";
import DashboardStyled from "./DashboardStyled";

import CurseModules from "./curse_modules/CurseModules";

const Deshboard = () => {
  const [isOpenModal, setOpenModal] = useModal();

  const onHandleClick = (e) => {
    console.log(e.target);
    setOpenModal();
  };

  const [search, setSearch] = useState("");
  const [searcTermhResult, setSearcTermhResult] = useState([]);

  useEffect(() => {
    setSearcTermhResult(curses);
  }, []);

  const onHandleSearch = (value) => {
    setSearch(value);

    if (value !== "") {
      // const newCurserList = curses.reduce((acc, curses) => {
      //   curses.title.toLowerCase().includes(value.toLowerCase()) &&
      //     acc.push(curses);

      //   if (acc.length === 0) {
      //     curses.module.forEach((m) => {
      //       if (m.title.toLowerCase().includes(value.toLowerCase())) {
      //         // console.log(m.title);
      //         const obj = JSON.parse(JSON.stringify(curses));
      //         obj.module.filter((el) => el.title === m.title);
      //         console.log(obj);
      //         acc.push();
      //       }
      //     });
      //   }
      //   // console.log(acc);
      //   return acc;
      // }, []);
      const newArrCurses = curses.filter(
        (curse) =>
          curse.title.toLowerCase().includes(value.toLowerCase()) ||
          curse.module.some(({ title }) =>
            title.toLowerCase().includes(value.toLowerCase())
          )
      );
      setSearcTermhResult(newArrCurses);
    } else {
      setSearcTermhResult(curses);
    }
  };

  return (
    <DashboardStyled>
      <Form term={search} searchKeyword={onHandleSearch} />

      <div className="content_board">
        <div className="block_wrapper">
          <div className="block_curses">
            <h2 className="block_title">In progress</h2>

            <ul className="block_list">
              {searcTermhResult.map((curse) => (
                <li
                  key={curse.id}
                  className="curses_card"
                  onClick={onHandleClick}
                >
                  <p className="curse_title">{curse.title}</p>
                  <CurseModules modules={curse.module} status="in progress" />
                </li>
              ))}
            </ul>
          </div>

          <div className="block_curses">
            <h2 className="block_title">Submitted</h2>

            <ul className="block_list">
              {searcTermhResult.map((curse) => (
                <li key={curse.id} className="curses_card">
                  <p className="curse_title">{curse.title}</p>
                  <CurseModules modules={curse.module} status="submitted" />
                </li>
              ))}
            </ul>
          </div>

          <div className="block_curses">
            <h2 className="block_title">Submitted</h2>

            <ul className="block_list">
              {searcTermhResult.map((curse) => (
                <li key={curse.id} className="curses_card">
                  <p className="curse_title">{curse.title}</p>
                  <CurseModules modules={curse.module} status="submitted" />
                </li>
              ))}
            </ul>
          </div>

          <div className="block_curses">
            <h2 className="block_title">Ready to submit to peer review</h2>

            <ul className="block_list">
              {searcTermhResult.map((curse) => (
                <li key={curse.id} className="curses_card">
                  <p className="curse_title">{curse.title}</p>
                  <CurseModules
                    modules={curse.module}
                    status="ready to submit to peer review"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="block_curses">
            <h2 className="block_title">Ready to submit to peer review</h2>

            <ul className="block_list">
              {searcTermhResult.map((curse) => (
                <li key={curse.id} className="curses_card">
                  <p className="curse_title">{curse.title}</p>
                  <CurseModules
                    modules={curse.module}
                    status="ready to submit to peer review"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="block_curses">
            <h2 className="block_title">Ready to submit to peer review</h2>

            <ul className="block_list">
              {searcTermhResult.map((curse) => (
                <li key={curse.id} className="curses_card">
                  <p className="curse_title">{curse.title}</p>
                  <CurseModules
                    modules={curse.module}
                    status="ready to submit to peer review"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="block_curses">
            <h2 className="block_title">Ready to submit to peer review</h2>

            <ul className="block_list">
              {searcTermhResult.map((curse) => (
                <li key={curse.id} className="curses_card">
                  <p className="curse_title">{curse.title}</p>
                  <CurseModules
                    modules={curse.module}
                    status="ready to submit to peer review"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isOpenModal && (
          <Modal handleCloseModal={setOpenModal}>
            <p>Good</p>
          </Modal>
        )}
      </div>
    </DashboardStyled>
  );
};

export default Deshboard;
