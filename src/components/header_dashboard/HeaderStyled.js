import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;

  border-width: 10px 0 0;
  border-top-style: solid;
  border-image: ${({ load }) =>
    !load
      ? "linear-gradient(139deg, #ffffff, #adadad, #5a5a5a, #141414) 3"
      : "linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3"};
  box-shadow: 1px 4px 11px -5px #7c7c7c;

  /* ============================== Sceleton ============================== */
  .scelet_wrapper {
    display: flex;
    align-items: center;
  }
  .scelet_wrapper:not(:last-child) {
    margin-right: 20px;
  }
  .sceleton_item {
    margin-right: 5px;
  }
  /* ============================== Sceleton ============================== */

  .input_wrapper {
    position: relative;
  }
  .icon_search {
    position: absolute;
    left: 5px;
    top: 1px;
    width: 13px;
  }
  .input_search {
    padding-left: 20px;
    border: none;
    border-bottom: 2px solid #0004ff;
  }
  .total_wrapper {
    display: flex;
  }

  .total_item {
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }

  .total_item:not(:last-child) {
    margin-right: 30px;
  }
  .total_sum {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    width: 40px;
    height: 40px;
    font-weight: 700;
    font-size: 20px;
    color: #0004ff;
    background-color: #fb8817;
    border-radius: 50%;
  }
`;

export default HeaderStyled;
