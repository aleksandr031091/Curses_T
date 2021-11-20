import Skeleton from "react-loading-skeleton";

const CurseModules = ({
  modules,
  status,
  onHandleClickModule,
  idxModule,
  load,
}) => {
  const arrModules = modules.filter((el) => el.status === status);

  const onHandleClick = (idx) => () => {
    onHandleClickModule(idx);
  };

  return (
    <ul className="module_list">
      {arrModules.map((module) => (
        <li
          className={
            modules.indexOf(module) === idxModule
              ? "focus-module_list_item module_list_item"
              : "module_list_item"
          }
          key={modules.indexOf(module)}
          onClick={onHandleClick(modules.indexOf(module))}
        >
          {!load ? (
            <Skeleton width="150px" height="20px" />
          ) : (
            <p>{module.title}</p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CurseModules;
