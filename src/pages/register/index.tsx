import Input from "../../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { IUserRegister, UserContext } from "../../contexts/userContext";
import StyledForm from "./style";
import Header from "../../components/Header";
import { useContext } from "react";
import BasicSelect from "../../components/Select";

const RegisterForm = () => {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required("Nome é obrigatório"),
      email: yup
        .string()
        .required("E-mail é obrigatório")
        .email("E-mail inválido"),
      password: yup
        .string()
        .matches(/.{6,}/, "Deve conter no mínimo 6 caracteres"),
      office: yup.string().required("Cargo é obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: yupResolver(schema) });

  const { registerUser, shift } = useContext(UserContext);

  const submit: SubmitHandler<IUserRegister> = (formData: IUserRegister) => {
    registerUser({ ...formData, shift, isAdm: false });
  };

  return (
    <>
      <Header content={"Conecte-se"} />

      <StyledForm onSubmit={handleSubmit(submit)}>
        <h2>Crie sua conta</h2>
        <Input
          label="Nome"
          register={register("name")}
          error={errors.name}
          type="text"
        />
        <Input
          label="Email"
          register={register("email")}
          error={errors.email}
          type="email"
        />
        <Input
          label="Senha"
          register={register("password")}
          error={errors.password}
          type="password"
        />
        <Input
          label="Cargo"
          register={register("office")}
          error={errors.office}
          type="text"
        />
        <BasicSelect />
        <button type="submit">Cadastrar</button>
        <div>
          <h3>Já possui uma conta ?</h3>
          <button
            onClick={(event) => {
              event.preventDefault();

              navigate("/login");
            }}
          >
            Conecte-se
          </button>
        </div>
      </StyledForm>
    </>
  );
};

export default RegisterForm;
