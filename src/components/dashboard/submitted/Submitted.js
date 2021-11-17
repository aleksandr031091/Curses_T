import { nanoid } from "nanoid";

const Submitted = ({ module }) => {
  const arr = module.filter((el) => el.status === "submitted");
  return (
    <>
      <ul className="module_list">
        {arr.map((el) => (
          <li className="module_list_item" key={nanoid()}>
            <p>{el.title}</p>
            {/* <p>{el.status}</p> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Submitted;
