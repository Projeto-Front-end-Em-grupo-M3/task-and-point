import { useContext, useState } from "react";
import { AdminContext, IUser } from "../../contexts/adminContext";
import Button from "../Button";
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
  } = useContext(AdminContext);

  const openModalPoints = (idButton: number) => {
    getPointsUser(idButton);
    setModalPoints(true);
  };

  const user = users?.find((user) => user.id == idButton);
  const userName = user?.name as string;

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
                  <Button
                    buttonText="Fechar"
                    type={"submit"}
                    clickFunction={() => setModal(false)}
                  />
                </header>
              </>
            )}

            <div className="main_div">
              <Button
                type="button"
                buttonText="Demitir"
                clickFunction={() => setConfirmDeleteModal(true)}
              />

              {confirmDeleteModal ? (
                <div className="dismiss_confirm">
                  <p>Tem certeza que deseja demitir essa pessoa?</p>
                  <div>
                    <Button
                      clickFunction={() => deleteUser(idButton, userName)}
                      buttonText="Sim, desejo demitir"
                      type={"submit"}
                    />
                    <Button
                      clickFunction={() => setConfirmDeleteModal(false)}
                      buttonText="Cancelar"
                      type={"submit"}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <Button
                    type="button"
                    buttonText="Ver folha ponto"
                    clickFunction={() => openModalPoints(idButton)}
                  />

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
                      <Button
                        clickFunction={() => setModalPoints(false)}
                        buttonText="X"
                        type={"button"}
                      />
                    </div>
                  ) : (
                    modalPoints && (
                      <div className="no-points">
                        <h3>Sem pontos registrados ainda</h3>
                        <Button
                          clickFunction={() => setModalPoints(false)}
                          buttonText="X"
                          type={"button"}
                        />
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
