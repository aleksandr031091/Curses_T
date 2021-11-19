import styled from "styled-components";

const SidebarStyled = styled.aside`
  padding: 30px 10px 10px 10px;
  width: 400px;
  /* height: 100%; */
  background-color: #fff;
  overflow-y: auto;
  .Btn {
    position: absolute;
    top: 51px;
    right: 10px;

    background: transparent;
    border: none;
  }

  .curse_title {
    font-weight: 700;
    font-size: 20px;
  }

  .module_list_item {
    border: none;
    box-shadow: none;
  }

  .focus-module_list_item {
    background-color: #e6f3ff;
    border-left: 3px solid #2600ff;
  }
  .module_name {
    font-size: 20px;
    color: #0077ff;
  }

  .module_status {
    font-size: 12px;
    text-align: end;
  }
`;

export default SidebarStyled;
