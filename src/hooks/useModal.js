import { useState } from "react";

const useModal = () => {
  const [stateModal, setOptionModal] = useState(false);

  const setStateModal = () =>
    setOptionModal((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }));

  return [stateModal, setStateModal];
};

export default useModal;
