import { nanoid } from "nanoid";

const Riwiew = ({ module }) => {
  const arr = module.filter(
    (el) => el.status === "ready to submit to peer review"
  );
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

export default Riwiew;
