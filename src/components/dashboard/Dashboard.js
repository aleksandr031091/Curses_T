import curses from "../curses.json";
import { useEffect, useState } from "react";
// import InProgress from "./inProgress/InProgress";
// import Submitted from "./submitted/Submitted";
// import Riwiew from "./riwiew/Riwiew";
// import Modal from "../modal/Modal";
import Form from "../form/Form";

// import useModal from "../../hooks/useModal";
import DashboardStyled from "./DashboardStyled";
import ContentBoard from "./dashboard_content/ContentBoard";

const Deshboard = () => {
  const [search, setSearch] = useState("");
  const [searcTermhResult, setSearcTermhResult] = useState([]);

  useEffect(() => {
    setSearcTermhResult(curses);
  }, []);

  const onHandleSearch = (value) => {
    setSearch(value);

    if (value !== "") {
      // const newCurserList = curses.reduce((acc, curses) => {
      //   curses.title.toLowerCase().includes(value.toLowerCase()) &&
      //     acc.push(curses);

      //   if (acc.length === 0) {
      //     curses.module.forEach((m) => {
      //       if (m.title.toLowerCase().includes(value.toLowerCase())) {
      //         // console.log(m.title);
      //         const obj = JSON.parse(JSON.stringify(curses));
      //         obj.module.filter((el) => el.title === m.title);
      //         console.log(obj);
      //         acc.push();
      //       }
      //     });
      //   }
      //   // console.log(acc);
      //   return acc;
      // }, []);
      const newArrCurses = curses.filter(
        (curse) =>
          curse.title.toLowerCase().includes(value.toLowerCase()) ||
          curse.module.some(({ title }) =>
            title.toLowerCase().includes(value.toLowerCase())
          )
      );
      setSearcTermhResult(newArrCurses);
    } else {
      setSearcTermhResult(curses);
    }
  };

  return (
    <DashboardStyled>
      <Form term={search} searchKeyword={onHandleSearch} />
      <ContentBoard searcTermhResult={searcTermhResult} />
    </DashboardStyled>
  );
};

export default Deshboard;
