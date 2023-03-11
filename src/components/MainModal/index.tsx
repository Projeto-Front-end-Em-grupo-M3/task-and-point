import { useContext, useState } from "react";
import { AdminContext } from "../../contexts/AdminContext";
import { DivMainModal, DivMainModalWrapper } from "./styles";

const MainModal = () => {
  const {
    setModal,
    modal,
    idButton,
    users,
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

  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);

  return (
    <>
      {modal && (
        <DivMainModalWrapper>
          <DivMainModal key={crypto.randomUUID()}>
            {user && (
              <>
                <header key={crypto.randomUUID()}>
                  <div>
                    <h2>{user.name}</h2>
                    <p>{user.office}</p>
                    <span>{user.shift}</span>
                  </div>
                  <button onClick={() => setModal(false)}>Fechar</button>
                </header>
              </>
            )}

            <div className="main_div">
              <button type="button" onClick={() => setConfirmDeleteModal(true)}>
                Demitir
              </button>
              {confirmDeleteModal ? (
                <div className="dismiss_confirm">
                  <p>Tem certeza que deseja demitir essa pessoa?</p>
                  <div>
                    <button onClick={() => deleteUser(idButton)}>
                      Sim, desejo demitir
                    </button>
                    <button onClick={() => setConfirmDeleteModal(false)}>
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => openModalPoints(idButton)}
                  >
                    Ver folha ponto
                  </button>
                  {modalPoints && pointsUser.length > 0 ? (
                    <div className="modal_points">
                      <ul className="list_points">
                        {pointsUser.map(
                          (point) =>
                            point.userId == idButton && (
                              <li key={crypto.randomUUID()}>
                                <p>{point.name}</p>
                                <span>{point.point}</span>
                              </li>
                            )
                        )}
                      </ul>
                      <button onClick={() => setModalPoints(false)}>X</button>
                    </div>
                  ) : (
                    modalPoints && (
                      <div>
                        <p>Sem pontos registrados ainda</p>
                        <button onClick={() => setModalPoints(false)}>X</button>
                      </div>
                    )
                  )}
                </>
              )}
            </div>
          </DivMainModal>
        </DivMainModalWrapper>
      )}
    </>
  );
};

export default MainModal;
