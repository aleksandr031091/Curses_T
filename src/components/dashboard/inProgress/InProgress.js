import { nanoid } from "nanoid";

const InProgress = ({ module }) => {
  const arr = module.filter((el) => el.status === "in progress");

  return (
    <>
      <ul className="module_list">
        {arr.map((el) => (
          <li className="module_list_item" key={nanoid()}>
            <p className="module_name">{el.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default InProgress;
