import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/Input";
import { IUserLogin, UserContext } from "../../contexts/userContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import StyledForm from "./style";

const LoginPage = () => {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup.string().required("E-mail inválido").email("E-mail inválido"),
      password: yup
        .string()
        .matches(/.{6,}/, "Deve conter no mínimo 6 caracteres"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(schema) });

  const { loginUser } = useContext(UserContext);

  const submit: SubmitHandler<IUserLogin> = (formData: IUserLogin) => {
    loginUser(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h2>Conectar</h2>
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
      <button type="submit">Conecte-se</button>
      <div>
        <h3>Não possui uma conta ?</h3>
        <button
          onClick={(event) => {
            event.preventDefault();
            navigate("/register");
          }}
        >
          Inscreva-se
        </button>
      </div>
    </StyledForm>
  );
};

export default LoginPage;
