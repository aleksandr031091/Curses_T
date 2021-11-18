import styled from "styled-components";

const DashboardStyled = styled.div`
  /* display: flex; */
  /* height: calc(100vh - 140px); */

  background-color: #c9fff3;
  box-shadow: 4px 4px 47px 0px rgba(34, 60, 80, 0.2);

  .content_board {
    display: flex;
    height: 600px;
  }
  .block_wrapper {
    display: flex;
    padding: 0 10px 0 10px;
    width: 100%;
    /* height: calc(100vh - 141px); */
    /* height: 100%; */
    overflow-x: auto;
    overflow-y: hidden;
  }

  .block_curses {
  }

  .block_curses:not(:last-child) {
    margin-right: 30px;
  }

  .block_list {
    width: 300px;
    height: calc(100% - 30px);

    overflow-y: auto;
  }

  .block_title {
    font-size: 17px;
    margin-bottom: 10px;
  }
  .curses_card {
    padding: 10px;
    background-color: #fff;
  }
  .curses_card:not(:last-child) {
    margin-bottom: 15px;
  }
  .curse_title {
    margin-bottom: 10px;
  }
  .module_list {
  }

  .module_list_item {
    padding: 10px;

    border-left: 3px solid black;
    box-shadow: 0px 0px 2px 1px rgba(97, 97, 97, 0.308);
  }
  .module_list_item:not(:last-child) {
    margin-bottom: 10px;
  }
  .module_name {
  }
`;

export default DashboardStyled;
