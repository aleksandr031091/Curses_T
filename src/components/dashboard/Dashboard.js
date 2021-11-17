import { useEffect, useState } from "react";
import DashboardStyled from "./DashboardStyled";
import curses from "../curses.json";
import InProgress from "./inProgress/InProgress";
import Submitted from "./submitted/Submitted";
import Riwiew from "./riwiew/Riwiew";
import Modal from "../modal/Modal";
import useModal from "../../hooks/useModal";
import Form from "../form/Form";

const Deshboard = () => {
  const [isOpenModal, setOpenModal] = useModal();
  const [search, setSearch] = useState("");
  const [searcTermhResult, setSearcTermhResult] = useState([]);

  useEffect(() => {
    setSearcTermhResult(curses);
  }, []);

  const onHandleSearch = (value) => {
    setSearch(value);
    if (value !== "") {
      const newCurserList = curses.filter((curse) =>
        curse.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );

      setSearcTermhResult(newCurserList);
    }
  };

  const onHandleClick = (e) => {
    // console.log(e.target);
    setOpenModal();
  };

  return (
    <DashboardStyled>
      <Form term={search} searchKeyword={onHandleSearch} />
      <div className="cpntent_wrapper">
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
                  {curse.module}
                  {/* <InProgress module={curse.module} /> */}
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
                  <Submitted module={curse.module} />
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
                  <Riwiew module={curse.module} />
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
                  <Riwiew module={curse.module} />
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
                  <Riwiew module={curse.module} />
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
                  <Riwiew module={curse.module} />
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
