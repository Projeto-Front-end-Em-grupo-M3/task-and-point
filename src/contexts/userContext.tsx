import { createContext, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export interface IDefaultProps {
  children: ReactNode;
}

interface IUserContext {
  registerUser: (formData: IUserRegister) => Promise<void>;
  loginUser: (formData: IUserLogin) => Promise<void>;
  logout: () => void;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  office: string;
  shift: string;
  isAdmin: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IDefaultProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("@TaskandPoint:isAdmin");

    if (isAdmin === "true") {
      navigate("/adminDashboard");
    }

    if (isAdmin === "false") {
      navigate("/userDashboard");
    }
  }, []);

  const registerUser = async (formData: IUserRegister) => {
    try {
      const response = await api.post("/users", formData);

      toast.success("Cadastro realizado com sucesso");
      navigate("/login");
    } catch (error: any) {
      if (error.response.data === "Email already exists") {
        toast.error("Esse email já existe");
      }
    }
  };

  const loginUser = async (formData: IUserLogin) => {
    try {
      const response = await api.post("/login", formData);

      localStorage.setItem(
        "@TaskandPoint:token",
        JSON.stringify(response.data.accessToken)
      );

      localStorage.setItem(
        "@TaskandPoint:isAdmin",
        JSON.stringify(response.data.user.isAdmin)
      );

      toast.success("Login realizado com sucesso");

      if (response.data.user.isAdmin === false) {
        navigate("/userDashboard");
      } else {
        navigate("/adminDashboard");
      }
    } catch (error: any) {
      console.log(error);
      if (error.response.data === "Cannot find user") {
        toast.error("Esse email não existe");
      }
      if (error.response.data === "Incorrect password") {
        toast.error("Email ou Senha incorreto");
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("@TaskandPoint:token");
    localStorage.removeItem("@TaskandPoint:isAdmin");
  };

  return (
    <UserContext.Provider value={{ registerUser, loginUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
