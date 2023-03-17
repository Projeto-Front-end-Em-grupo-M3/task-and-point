import { useContext, useEffect, useState } from "react";
import { AdminContext, ITasks } from "../../contexts/AdminContext";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import MainModal from "../../components/MainModal";
import { StyledDash } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import { UserContext } from "../../contexts/userContext";
import Button from "../../components/Button";
import more from "../../assets/more.svg";
import admIcon from "../../assets/admIcon.svg";
import trashCan from "../../assets/trashCan.svg";

const schema = yup
  .object({
    name: yup.string().required("Digite um nome"),
    task: yup.string().required("Digite a atividade"),
  })
  .required();

const AdminDashboard = () => {
  const {
    adm,
    users,
    setUsers,
    employeSearch,
    setModal,
    modal,
    setIdButton,
    tasks,
    setTasks,
    createTask,
    deleteTask,
    tasksSearch,
    getAllTasks,
    getAllUsers,
    getAdminInfo,
    getAllPoints,
  } = useContext(AdminContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ITasks>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<ITasks> = (data) => {
    createTask({ ...data, status: "Em andamento" });
    reset();
  };

  useEffect(() => {
    getAllPoints();
    getAllUsers();
    getAllTasks();
    getAdminInfo(1);
  }, []);

  const [searchValue, setSearchValue] = useState("");

  const search = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (searchValue !== "") {
      const searchResults = employeSearch.filter(
        (employe) =>
          employe.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          employe.office?.toLowerCase().includes(searchValue.toLowerCase())
      );
      setUsers(searchResults);

      if (searchResults.length === 0) {
        toast.error("Usuário não encontrado");
        setUsers(employeSearch);
      }
    }

    if (searchValue === "") {
      toast.warning("Digite algo");
      setUsers(employeSearch);
    }

    if (searchValue !== "") {
      const searchTasks = tasksSearch.filter((task) =>
        task.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setTasks(searchTasks);

      if (searchTasks.length === 0) {
        setTasks(tasksSearch);
      }
    }

    if (searchValue === "") {
      setTasks(tasksSearch);
    }

    setSearchValue("");
  };

  function openModal(id: any) {
    setModal(true);
    setIdButton(id);
  }

  return (
    <>
      {modal && <MainModal />}
      <Header content={"Sair"} />
      <StyledDash>
        <div className="info_div">
          <img src={admIcon} id="icon" />
          <div className="sub_info_div">
            <h1>{adm ? adm.name : null}</h1>
            <p>{adm ? adm.email : null}</p>
          </div>
        </div>

        <div className="search_div">
          <div className="info_login">
            <p id="bold">Lista de usuários</p>
            <span id="opacity">Gerencie as atividades da equipe</span>
          </div>
          <div className="search_input">
            <Input
              type="text"
              label="Digitar pesquisa"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <Button
              clickFunction={search}
              buttonText="Pesquisar"
              type={"submit"}
            />
          </div>
        </div>

        <section className="employeesList_section">
          <div className="employeesList_header">
            <div className="sub_employeesList_header">
              <p>Nome</p>
              <p>Email</p>
              <p>Cargo</p>
              <p>Turno</p>
            </div>
          </div>
          <ul>
            {users && users.length > 0 ? (
              users.map((user) => {
                return (
                  <li key={crypto.randomUUID()}>
                    <div className="sub_employeesList_header">
                      <h2>{user.name}</h2>
                      <p>{user.email}</p>
                      <p>{user.office}</p>
                      <span>{user.shift}</span>
                    </div>
                    <img
                      src={more}
                      id="more"
                      onClick={() => openModal(user.id)}
                    />
                  </li>
                );
              })
            ) : (
              <h1>Nenhum funcionário cadastrado</h1>
            )}
          </ul>
        </section>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Criar e atribuir tarefas</h3>
          <div>
            <select id="users" {...register("name")}>
              <option value="">Escolha o funcionário</option>
              {users?.map((user) => {
                return (
                  <option value={user.name} key={crypto.randomUUID()}>
                    {user.name}
                  </option>
                );
              })}
            </select>

            <div id="test">
              <Input
                type="text"
                label="Escreva a tarefa"
                register={register("task")}
                error={errors.task}
              />
            </div>
            <Button buttonText="+ Criar" type={"submit"} />
          </div>
        </form>

        <section id="tasks_section" className="employeesList_section">
          <div className="employeesList_header">
            <div>
              <p>Tarefas atribuídas</p>
            </div>
          </div>
          <ul>
            {tasks && tasks.length > 0 ? (
              tasks.map((task) => {
                return (
                  <li key={crypto.randomUUID()}>
                    <h2>{task.name}</h2>
                    <p id="task">{task.task}</p>
                    <p
                      id="status_task"
                      style={{
                        color:
                          task.status === "Em andamento"
                            ? "#eb0202"
                            : "#2380FB",
                      }}
                    >
                      {task.status}
                    </p>
                    <img
                      id="trashCan"
                      src={trashCan}
                      onClick={() => deleteTask(task.id)}
                    />
                  </li>
                );
              })
            ) : (
              <p>Nenhuma atividade atribuída</p>
            )}
          </ul>
        </section>
      </StyledDash>
    </>
  );
};

export default AdminDashboard;
