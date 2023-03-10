import { SetStateAction, useContext, useState } from "react";
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
//import React from "react";

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
        loginUser,
        logout,
        pointsUser,
        tasks,
    } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IUserLogin>({ resolver: yupResolver(schema) });    
    
    const submit: SubmitHandler<IUserLogin> = (formData: IUserLogin) => {
        loginUser(formData);
    };

    const [searchValue, setSearchValue] = useState("");

    const search = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        setSearchValue("");
    };


    return(
    <>
    <Header />
    <StyledDash onSubmit={handleSubmit(submit)}>
        <div className="info_div">
            <h1>Usuário: {user ? user.name : null}</h1>
            <p>Email: {user ? user.email : null}</p>
            <p>Cargo: {user ? user.office : null}</p>
            <p>Turno de Trabalho: {user ? user.shift : null}</p>
        </div>

        <div>
            <button type="submit" 
                onClick={(event) => {
                    event.preventDefault();
                    navigate("/register");
                }}
            >
                Registar Ponto
            </button>
        </div>

        <div className="search_div">
            <div>
                <p>Lista de tarefas</p>
                <span>Acompanhe as próximas atividades a executar</span>
            </div>

            <div>
                <p>Inluir um input para a busca</p>

                <button type="submit" onClick={search}>
                    Pesquisar
                </button>
            </div>
        </div>

        <section className="taskList_section">
          <div className="taskList_header">
            <ul>
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => {
                        return (
                        <li key={crypto.randomUUID()}>
                            <span>{task.task}</span>
                            <button type="button" onClick={() => (task.status)}>
                            "Concluído"
                            </button>
                        </li>
                        );
                    })
                ) : (
                <h1>Nenhuma tarefa cadastrada</h1>
                )}
            </ul>
          </div>
        </section>
    </StyledDash></>
    )
};

export default userDashboard;