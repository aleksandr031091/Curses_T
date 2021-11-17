import FormStyled from "./FormStyled";

const Form = () => {
  return (
    <FormStyled>
      <label>
        <input type="text" />
      </label>

      <div className="total_wrapper">
        <p>total curses 3</p>
        <p>total nodule 9</p>
      </div>
    </FormStyled>
  );
};

export default Form;
