import useModal from "../../../hooks/useModal";
import Modal from "../../modal/Modal";
import InProgress from "../inProgress/InProgress";
import Riwiew from "../riwiew/Riwiew";
import Submitted from "../submitted/Submitted";
import ContentBoardStyled from "./ContentBoardStyled";

const ContentBoard = ({ searcTermhResult }) => {
  const [isOpenModal, setOpenModal] = useModal();

  const onHandleClick = (e) => {
    console.log(e.target);
    setOpenModal();
  };

  return (
    <ContentBoardStyled>
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
                <InProgress module={curse.module} />
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
    </ContentBoardStyled>
  );
};

export default ContentBoard;
