import { useContext, useState } from "react";
import { AdminContext, ITasks } from "../../contexts/AdminContext";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import MainModal from "../../components/MainModal";
import { StyledDash } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    console.log(id);
  }

  return (
    <>
      {modal && <MainModal />}
      <Header />
      <StyledDash>
        <div className="info_div">
          <h1>Usúario: {adm ? adm.name : null}</h1>
          <p>Email: {adm ? adm.email : null}</p>
        </div>

        <div className="search_div">
          <div>
            <p>Lista de usuários</p>
            <span>Gerencie as atividades da equipe</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Procurar funcionário"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <button type="submit" onClick={search}>
              Pesquisar
            </button>
          </div>
        </div>

        <section className="employeesList_section">
          <div className="employeesList_header">
            <div>
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
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.office}</p>
                    <span>{user.shift}</span>
                    <button type="button" onClick={() => openModal(user.id)}>
                      Ver mais
                    </button>
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
            <input
              type="text"
              placeholder="Digite o nome do funcionário"
              {...register("name")}
            />
            <input
              type="text"
              placeholder="Escreva a atividade"
              {...register("task")}
            />
          </div>
          <button type="submit">Criar</button>
        </form>

        <section className="employeesList_section">
          <div className="employeesList_header">
            <div>
              <p>Tarefas atribuidas</p>
            </div>
          </div>
          <ul>
            {tasks && tasks.length > 0 ? (
              tasks.map((task) => {
                return (
                  <li key={crypto.randomUUID()}>
                    <h2>{task.name}</h2>
                    <p>{task.task}</p>
                    <p>{task.status}</p>
                    <button onClick={() => deleteTask(task.id)}>Excluir</button>
                  </li>
                );
              })
            ) : (
              <h1>Nenhuma atividade atribuída</h1>
            )}
          </ul>
        </section>
      </StyledDash>
    </>
  );
};

export default AdminDashboard;
