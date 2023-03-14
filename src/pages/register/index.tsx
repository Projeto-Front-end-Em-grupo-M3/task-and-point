import Input from "../../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { IUserRegister, UserContext } from "../../contexts/userContext";
import StyledForm from "./style";
import Header from "../../components/Header";

const RegisterForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiaWF0IjoxNjc4NzE4MDI2LCJleHAiOjE2Nzg3MjE2MjYsInN1YiI6IjEifQ.qLeDYmfXVt2O3xjBYGwMBqEhlK9CUnoS_ZNcn8fmQ4I";
    console.log(parseJwt(token));
  }, []);

  function parseJwt(token: string) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  const schema = yup
    .object({
      name: yup.string().required("Nome inválido"),
      email: yup.string().required("E-mail inválido").email("E-mail inválido"),
      password: yup
        .string()
        .matches(/.{6,}/, "Deve conter no mínimo 6 caracteres"),
      office: yup.string().required("Cargo Inválido"),
      shift: yup.string().required("Turno de Trabalho Inválido"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({ resolver: yupResolver(schema) });

  const { registerUser } = useContext(UserContext);

  const submit: SubmitHandler<IUserRegister> = (formData: IUserRegister) => {
    registerUser({ ...formData, isAdm: false });
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
        <Input
          label="Turno de Trabalho"
          register={register("shift")}
          error={errors.shift}
          type="text"
        />
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
