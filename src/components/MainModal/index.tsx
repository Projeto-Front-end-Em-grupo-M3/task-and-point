import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { DivMainModal, DivMainModalWrapper } from "./styles";

const MainModal = () => {
  const { setModal, modal } = useContext(AdminContext);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal && (
        <DivMainModalWrapper>
          <DivMainModal>
            <button onClick={closeModal}>fechar</button>
          </DivMainModal>
        </DivMainModalWrapper>
      )}
    </>
  );
};

export default MainModal;
