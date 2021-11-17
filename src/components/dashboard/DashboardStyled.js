import styled from "styled-components";

const DashboardStyled = styled.div`
  padding: 0 0 0 10px;
  background-color: #c9fff3;
  box-shadow: 4px 4px 47px 0px rgba(34, 60, 80, 0.2);

  .block_wrapper {
    display: flex;
  }
  .block_curses {
    width: 300px;
    margin-right: 30px;
  }

  .block_title {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .curses_card {
    padding: 5px;
    background-color: #fff;
  }
  .curses_card:not(:last-child) {
    margin-bottom: 15px;
  }

  .module_list {
    padding: 5px;
  }
  .module_list_item {
    padding: 10px;

    /* background-color: #fff; */
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
