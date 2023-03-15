import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import { StyledDash } from "./styles";
import { AdminContext } from "../../contexts/AdminContext";
import { api } from "../../services/api";

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

  return (
    <StyledDash>
      <Header content="Sair" />
      <div className="info_div">
        <h3>{user?.name}</h3>
        <p>{user?.email}</p>
        <p>{user?.office}</p>
        <p>{user?.shift}</p>
      </div>

      <div>
        <button onClick={() => createPoint()}>Bater ponto</button>
        <ul>
          <p>Lista de pontos batidos</p>
          {allPoints.map((point) => {
            if (point.userId === user?.id) {
              return (
                <li>
                  <p>{point.point}</p>
                </li>
              );
            }
          })}
        </ul>
      </div>

      <section className="employeesList_section taskList_section">
        <ul>
          {tasksOfUser && tasksOfUser.length > 0 ? (
            tasksOfUser.map((task) => {
              return (
                <li id="user_task" key={crypto.randomUUID()}>
                  <h3>{task.name}</h3>
                  <p>{task.task}</p>
                  <p>{task.status}</p>
                  <button onClick={() => checkTask(task.id)}>Feita</button>
                </li>
              );
            })
          ) : (
            <p>Nenhuma atividade a fazer</p>
          )}
        </ul>
      </section>
    </StyledDash>
  );
};
export default UserDashboard;
