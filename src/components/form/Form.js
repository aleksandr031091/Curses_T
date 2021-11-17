import FormStyled from "./FormStyled";

const Form = ({ term, searchKeyword }) => {
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
        <p>total nodule 9</p>
      </div>
    </FormStyled>
  );
};

export default Form;
