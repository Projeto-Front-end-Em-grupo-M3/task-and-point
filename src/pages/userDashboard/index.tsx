import { SetStateAction, useContext, useEffect, useState } from "react";
import { UserContext, IUserLogin, IUser } from "../../contexts/userContext";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { StyledDash } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ITasks, IPoints } from "../../contexts/AdminContext";
import { string } from "prop-types";
import TaskCard from "../../components/TaskCard";

const schema = yup
  .object({
    task: yup.string().required("Digite a atividade"),
  })
  .required();

const userDashboard = () => {
    const navigate = useNavigate();

    const {
        user,
        registerUser,
        registerPointUser,
        loginUser,
        logout,
        pointsUser,
        tasks,
        setTasks,
        getTasks,
    } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ITasks>({ resolver: yupResolver(schema) });
    

    useEffect (() => {
        const token = localStorage.getItem("@TaskandPoint:token")
        
        const requestTasks = async () => {
            getTasks(token)
        } 
        requestTasks()
    }, [])
    
    
    const submit: SubmitHandler<IUserLogin> = (formData: IUserLogin) => {
        loginUser(formData);
    };

    const onSubmit: SubmitHandler<ITasks> = (data) => {
        createTask({ ...data, status: "Em andamento" });
        reset();
    };

    const [searchValue, setSearchValue] = useState("");

    /* const search = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        //const date = new Date().getHours; 

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
    }; */


    return(
    <>
        <Header/>
        <StyledDash>
            <div className="info_div">
                <div className="ident_user">
                    <img src="./src/assets/img/user1.svg" className="img_avatar" alt="avatar"></img>
                    <h1>Usuário: {user ? user.name : null}</h1>
                </div>
                <div className="info_user_div">
                    <p>Email: {user ? user.email : null}</p>
                    <p>Cargo: {user ? user.office : null}</p>
                    <p>Turno de Trabalho: {user ? user.shift : null}</p>
                </div>
            </div>

            <div className="buttonPont_div">
                <button 
                    onClick={(event) => {
                        event.preventDefault();
                        registerPointUser();
                    }}
                >
                    Registar ponto
                </button>
            </div>

            <div className="search_div">
                <div className="info_login">
                    <p>Lista de tarefas</p>
                    <span>Acompanhe as próximas atividades a executar</span>
                </div>

                <div className="search_input">
                    <input
                        type="text"
                        placeholder="Digitar pesquisa"
                        value={searchValue}
                        onChange={(event) => setSearchValue(event.target.value)}
                        className="search_input"
                    />

                    <button type="submit" /* onClick={search} */ className="button_search">
                        Pesquisar
                    </button>
                </div>
            </div>

            <section className="taskList_section">
            <div className="taskList_header">
                <div><p></p></div>
            </div>
            <ul>
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => {
                        return (
                        TaskCard(task)
                        );
                    })
                ) : (
                <h1>Nenhuma tarefa cadastrada</h1>
                )}
            </ul>
            </section>
        </StyledDash></>
    )
};

export default userDashboard;