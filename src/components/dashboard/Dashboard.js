import DashboardStyled from "./DashboardStyled";
import curses from "../curses.json";
import InProgress from "./inProgress/InProgress";
import Submitted from "./submitted/Submitted";
import Riwiew from "./riwiew/Riwiew";
import Form from "../form_dashboard/Form";
import Modal from "../modal/Modal";
import useModal from "../../hooks/useModal";

const Deshboard = () => {
  const [stateModal, setStateModal] = useModal();

  const onHandleClick = (e) => {
    console.log(e.target);
  };

  return (
    <DashboardStyled>
      <Form />
      <Modal handleCloseModal={setStateModal}>
        <p>Good</p>
      </Modal>
      <div className="block_wrapper">
        <div className="block_curses">
          <h2 className="block_title">In progress</h2>

          <ul>
            {curses.map((curse) => (
              <li
                key={curse.id}
                className="curses_card"
                onClick={onHandleClick}
              >
                {curse.title}
                <InProgress module={curse.module} />
              </li>
            ))}
          </ul>
        </div>

        <div className="block_curses">
          <h2 className="block_title">Submitted</h2>
          <ul>
            {curses.map((curse) => (
              <li key={curse.id} className="curses_card">
                {curse.title}
                <Submitted module={curse.module} />
              </li>
            ))}
          </ul>
        </div>

        <div className="block_curses">
          <h2 className="block_title">Ready to submit to peer review</h2>
          <ul>
            {curses.map((curse) => (
              <li key={curse.id} className="curses_card">
                {curse.title}
                <Riwiew module={curse.module} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardStyled>
  );
};

export default Deshboard;
