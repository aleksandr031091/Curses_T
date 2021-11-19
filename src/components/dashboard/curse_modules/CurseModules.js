const CurseModules = ({ modules, status, onHandleClickModule }) => {
  const arrModules = modules.filter((el) => el.status === status);

  const onHandleClick = (idx) => () => {
    onHandleClickModule(idx);
  };

  // console.log(modules);

  return (
    <ul className="module_list">
      {arrModules.map((module) => (
        <li
          className="module_list_item"
          key={modules.indexOf(module)}
          onClick={onHandleClick(modules.indexOf(module))}
        >
          <p className="module_name">{module.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default CurseModules;
