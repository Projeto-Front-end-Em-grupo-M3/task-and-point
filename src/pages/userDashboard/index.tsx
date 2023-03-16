import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import { StyledDash } from "./styles";
import { AdminContext } from "../../contexts/AdminContext";
import { api } from "../../services/api";
import Button from "../../components/Button";
import exitBtn from "../../assets/exit.svg";

const UserDashboard = () => {
  const { user, setTasks } = useContext(UserContext);
  const { tasks, allPoints, setAllPoints, token, getAllTasks, getAllPoints } =
    useContext(AdminContext);

  useEffect(() => {
    getAllTasks();
    getAllPoints();
  }, []);

  const tasksOfUser = tasks.filter((task) => task.name === user?.name);

  const [taskId, setTaskId] = useState(0);

  const checkTask = async (id: number) => {
    setTaskId(id);
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      const task = newTasks[taskIndex];
      task.status = "Finalizada";

      setTasks(newTasks);

      const data = {
        name: task.name,
        task: task.task,
        status: "Finalizada",
      };

      try {
        if (token) {
          api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
            token
          )}`;
          await api.patch(`/tasks/${id}`, data);
          toast.success("Tarefa finalizada");
        }
      } catch (error) {
        toast.error("Tente novamente");
      }
    }
  };

  const createPoint = async () => {
    const date = new Date().toLocaleString();
    console.log(date);

    const data = {
      point: date,
      name: user?.name,
      userId: user?.id,
    };

    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
          token
        )}`;
        const response = await api.post(`/points`, data);
        toast.success("Ponto registrado");
        setAllPoints([...allPoints, response.data]);
      } catch (error) {
        toast.error("Tente novamente");
      }
    }
  };

  const [modalPoints, setModalPoints] = useState(false);

  return (
    <>
      <Header content="Sair" />
      <StyledDash>
        <div className="info_user">
          <h1>{user?.name}</h1>
          <div>
            <p>{user?.email}</p>
            <p>{user?.office}</p>
            <p>{user?.shift}</p>
            <Button
              clickFunction={() => setModalPoints(true)}
              buttonText="Ver pontos batidos"
              type="submit"
            />
          </div>
        </div>

        <button onClick={() => createPoint()} type="submit">
          Bater Ponto
        </button>
        {modalPoints && (
          <div className="register_block">
            <img
              id="exitIcon"
              src={exitBtn}
              onClick={() => setModalPoints(false)}
              alt="exit"
            />
            <h3>Lista de pontos batidos</h3>
            <ul>
              {allPoints.length > 0 ? (
                allPoints.map((point) => {
                  if (point.userId === user?.id) {
                    return (
                      <li>
                        <p>{point.point}</p>
                      </li>
                    );
                  }
                })
              ) : (
                <p>Nenhum ponto registrado ainda</p>
              )}
            </ul>
          </div>
        )}

        <section>
          <h3 id="p_task_list">Lista de tarefas</h3>
          <ul>
            {tasksOfUser && tasksOfUser.length > 0 ? (
              tasksOfUser.map((task) => {
                return (
                  <li id="user_task" key={crypto.randomUUID()}>
                    <p>{task.task}</p>
                    <p id="task_status">{task.status}</p>
                    <input
                      type={"checkbox"}
                      value=""
                      checked
                      onClick={() => checkTask(task.id)}
                    />
                  </li>
                );
              })
            ) : (
              <p id="no_task">Nenhuma atividade a fazer</p>
            )}
          </ul>
        </section>
      </StyledDash>
    </>
  );
};
export default UserDashboard;
