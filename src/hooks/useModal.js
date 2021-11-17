import { useState } from "react";

const useModal = () => {
  const [stateModal, setOptionModal] = useState(false);

  const setStateModal = () => setOptionModal(!stateModal);

  return [stateModal, setStateModal];
};

export default useModal;
