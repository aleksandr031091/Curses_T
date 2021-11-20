import styled from "styled-components";

const SidebarStyled = styled.aside`
  padding: 30px 10px 10px 10px;
  width: 400px;
  background-color: #fff;
  overflow-y: auto;
  box-shadow: 0px 0px 18px 0px rgba(34, 60, 80, 0.53);
  z-index: 1;

  .Btn {
    position: absolute;
    top: 95px;
    right: 5px;

    background: transparent;
    border: none;
  }

  .curse_title {
    font-weight: 700;
    font-size: 20px;
  }

  .sidebar_list_item {
    padding: 10px;
    border: none;
    box-shadow: none;
  }

  .focus-sidebar_list_item {
    background-color: #e6f3ff;
    border-left: 3px solid #2600ff;
  }
  .sidebar_name {
    font-size: 20px;
    color: #0077ff;
  }

  .sidebar_status {
    font-size: 12px;
    text-align: end;
  }
`;

export default SidebarStyled;
