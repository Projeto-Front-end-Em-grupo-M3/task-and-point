import React from "react";
import { SetStateAction, useContext, useState } from "react";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledDash } from "./styles";
import Header from "../../components/Header";
import MainModal from "../../components/MainModal";
import Input from "../../components/Input";
import { UserContext } from "../../contexts/userContext";


const schema = yup
  .object({
    name: yup.string().required("Digite um nome"),
    task: yup.string().required("Digite a atividade"),
  })
.required();

const userDashboard = () => {
    const {
        user,
      } = useContext(userContext);
    
    const [searchValue, setSearchValue] = useState("");
    
    return(
    <>
    <Header />
    <StyledDash>
        <div className="info_div">
            <h1>Usúario:</h1>
            <p>Email:</p>
        </div>

        <div className="search_div">
            <div>
                <p>Lista de usuários</p>
                <span>Gerencie as atividades da equipe</span>
            </div>

            <div>
                <button type="submit" onClick={search}>
                    Pesquisar
                </button>
            </div>
        </div>
    </StyledDash></>
    )
};