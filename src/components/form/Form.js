import FormStyled from "./FormStyled";

const Form = ({ term, searchKeyword, totalModules }) => {
  const onHandleChange = (e) => {
    const value = e.target.value;

    searchKeyword(value);
  };

  return (
    <FormStyled>
      <label>
        <input
          type="text"
          className="prompt"
          onChange={onHandleChange}
          value={term}
        />
      </label>

      <div className="total_wrapper">
        <p>total curses 3</p>
        <p>total nodule {totalModules}</p>
      </div>
    </FormStyled>
  );
};

export default Form;
