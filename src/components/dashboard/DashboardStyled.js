import styled from "styled-components";

const DashboardStyled = styled.div`
  height: 100vh;
  background-color: ${({ load }) => (!load ? "#ebebeb" : "#fff8f2")};

  /* =====================module style===================== */
  .module_list_item {
    padding: 10px;
    border-left: 3px solid ${({ load }) => (!load ? "#8b8b8b" : "#000000")};
    box-shadow: 0px 0px 2px 1px rgba(97, 97, 97, 0.308);
    cursor: pointer;
  }
  .module_list_item:not(:last-child) {
    margin-bottom: 10px;
  }
  .focus-module_list_item {
    background-color: ${({ load }) => (!load ? "#d1d1d1" : "#e6f3ff")};
    border-left: 3px solid ${({ load }) => (!load ? "#8b8b8b" : "#2600ff")};
  }

  /* =====================content style===================== */
  .content_board {
    display: flex;
    height: calc(100% - 90px);
  }
  .block_wrapper {
    display: flex;
    padding: 10px 10px 0 10px;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .block_curses:not(:last-child) {
    margin-right: 10px;
  }
  .block_list {
    padding: 20px;
    width: 300px;
    height: calc(100% - 53px);
    border-right: 1px solid ${({ load }) => (!load ? "#474747" : "#ffa600")};

    overflow-y: auto;
  }
  .block_title {
    font-size: 17px;
    margin-right: 10px;
  }
  .title_item {
    font-weight: 700;
    font-size: 18px;
    color: #0004ff;
  }

  /* ======================= Curses_card ======================= */
  .curses_card {
    padding: 10px;
    background-color: ${({ load }) => (!load ? "#dddddd" : "#fff")};
    box-shadow: 4px 4px 10px 0px rgba(34, 60, 80, 0.2);
  }
  .curses_card:not(:last-child) {
    margin-bottom: 15px;
  }
  .focus-curses_card {
    border: 1px solid ${({ load }) => (!load ? "#525252" : "#2600ff")};
  }
  .block_title_wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .card_head_wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 10px;
  }
  .curse_title {
    margin-right: 8px;
  }
  .course_autor {
    margin-right: 5px;
    padding: 3px;
    font-size: 15px;

    background-color: #ffdc41dc;
    border-radius: 8px;
    text-transform: capitalize;
  }
  .course_active {
    margin-right: 5px;
    padding: 3px;
    background-color: #49d449e2;
    border-radius: 8px;
  }
  .course_priority {
    margin-right: 10px;
    padding: 3px;
    background-color: #ff7057;
    border-radius: 8px;
  }
  .course_description {
    padding: 2px;
    font-size: 12px;
    color: #494949;
    background-color: #fffcf7;
  }
  .sceleton_wrapper {
    margin-top: 5px;
  }
`;

export default DashboardStyled;
