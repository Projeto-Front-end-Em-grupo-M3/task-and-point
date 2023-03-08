import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export interface IDefaultProps {
  children: ReactNode;
}

interface IUserContext {
  registerUser: (formData: IUserRegister) => Promise<void>;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  office: string;
  shift: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IDefaultProps) => {
  const navigate = useNavigate();

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

  return (
    <UserContext.Provider value={{ registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
