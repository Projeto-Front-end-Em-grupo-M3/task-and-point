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
    modalPoints,
    setModalPoints,
    modalDelete,
    setModalDelete,
  } = useContext(AdminContext);

  const openModalPoints = (idButton: number) => {
    getPointsUser(idButton);
    setModalPoints(true);
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
                  <button onClick={() => setModal(false)}>fechar</button>
                </header>
              </>
            )}

            <div>
              <button
                type="button"
                onClick={() => setModalDelete(true) /* deleteUser(idButton) */}
              >
                Demitir
              </button>
              {modalDelete && (
                <div>
                  <p>Tem certeza que deseja demitir essa pessoa?</p>
                  <div>
                    <button onClick={() => deleteUser(idButton)}>
                      Sim, desejo demitir
                    </button>
                    <button onClick={() => setModalDelete(false)}>
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
              <button type="button" onClick={() => openModalPoints(idButton)}>
                Ver folha ponto
              </button>
              {modalPoints && pointsUser.length > 0 ? (
                <ul>
                  {pointsUser.map(
                    (point) =>
                      point.userId == idButton && (
                        <li>
                          <p>{point.name}</p>
                          <p>{point.point}</p>
                        </li>
                      )
                  )}
                  <button onClick={() => setModalPoints(false)}>X</button>
                </ul>
              ) : (
                modalPoints && (
                  <div>
                    <p>Sem pontos registrados ainda</p>
                    <button onClick={() => setModalPoints(false)}>X</button>
                  </div>
                )
              )}
            </div>
          </DivMainModal>
        </DivMainModalWrapper>
      )}
    </>
  );
};

export default MainModal;
