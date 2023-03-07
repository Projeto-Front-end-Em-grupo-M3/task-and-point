import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { DivMainModal, DivMainModalWrapper } from "./styles";

const MainModal = () => {
  const { setModal, modal, idButton, users } = useContext(AdminContext);

  const closeModal = () => {
    setModal(false);
  };

  const user = users?.find((user) => user.id == idButton);

  return (
    <>
      {modal && (
        <DivMainModalWrapper>
          <DivMainModal>
            {user && (
              <header key={crypto.randomUUID()}>
                <div>
                  <h2>{user.name}</h2>
                  <p>{user.office}</p>
                  <span>{user.shift}</span>
                </div>
                <button onClick={closeModal}>fechar</button>
              </header>
            )}

            <div>
              <button>Ver tarefas atribuídas</button>
              <button>Incluir tarefa</button>
              <button>Ver folha ponto</button>
              <button>Excluir usuário</button>
            </div>
          </DivMainModal>
        </DivMainModalWrapper>
      )}
    </>
  );
};

export default MainModal;
