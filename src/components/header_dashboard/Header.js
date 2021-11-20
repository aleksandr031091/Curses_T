import HeaderStyled from "./HeaderStyled";
import sprite from "../../image/sprite.svg";
import Skeleton from "react-loading-skeleton";

const Header = ({ term, searchKeyword, totalModules, totalCurses, load }) => {
  const onHandleChange = (e) => {
    const value = e.target.value;

    searchKeyword(value);
  };

  return (
    <HeaderStyled load={load}>
      <div className="input_wrapper">
        <svg className="icon_search" width="18" height="18">
          <use href={sprite + "#icon-search"}></use>
        </svg>
        {!load ? (
          <Skeleton width="200px" height="20px" />
        ) : (
          <input
            type="text"
            className="input_search"
            onChange={onHandleChange}
            value={term}
            placeholder="Search"
          />
        )}
      </div>

      {!load ? (
        <div className="total_wrapper">
          <div className="scelet_wrapper">
            <div className="sceleton_item">
              <Skeleton width="40px" height="40px" circle="50px" />
            </div>
            <Skeleton width="100px" height="20px" />
          </div>

          <div className="scelet_wrapper">
            <div className="sceleton_item">
              <Skeleton width="40px" height="40px" circle="50px" />
            </div>
            <Skeleton width="100px" height="20px" />
          </div>
        </div>
      ) : (
        <div className="total_wrapper">
          <div className="total_item">
            <div className="total_sum">{totalCurses}</div> total curses
          </div>

          <div className="total_item">
            <div className="total_sum">{totalModules}</div> total nodules
          </div>
        </div>
      )}
    </HeaderStyled>
  );
};

export default Header;
