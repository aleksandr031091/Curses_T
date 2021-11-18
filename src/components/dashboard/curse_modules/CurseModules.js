import { nanoid } from "nanoid";

const CurseModules = ({ modules, status }) => {
  const arrModules = modules.filter((el) => el.status === status);

  return (
    <ul className="module_list">
      {arrModules.map((el) => (
        <li className="module_list_item" key={nanoid()}>
          <p className="module_name">{el.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default CurseModules;
