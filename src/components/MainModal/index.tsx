import { useContext } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { DivMainModal, DivMainModalWrapper } from "./styles";

const MainModal = () => {
  const {
    setModal,
    modal,
    idButton,
    users,
    getTaskById,
    tasks,
    deleteUser,
    getPointsUser,
    pointsUser,
  } = useContext(AdminContext);

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
              <>
                <header key={crypto.randomUUID()}>
                  <div>
                    <h2>{user.name}</h2>
                    <p>{user.office}</p>
                    <span>{user.shift}</span>
                  </div>
                  <button onClick={closeModal}>fechar</button>
                </header>
              </>
            )}

            <div>
              <button type="button" onClick={() => deleteUser(idButton)}>
                Demitir
              </button>
              <button type="button" onClick={() => getPointsUser(idButton)}>
                Ver folha ponto
              </button>
              {pointsUser.length > 0 && (
                <ul>
                  {pointsUser.map((point) => (
                    <li>
                      <p>{point.name}</p>
                      <p>{point.point}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </DivMainModal>
        </DivMainModalWrapper>
      )}
    </>
  );
};

export default MainModal;
