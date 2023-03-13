import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ITasks, IPoints } from "./AdminContext";

export interface IDefaultProps {
  children: ReactNode;
}

interface IUserContext {
  registerUser: (formData: IUserRegister) => Promise<void>;
  loginUser: (formData: IUserLogin) => Promise<void>;
  logout: () => void;
  user: IUser | null;
  /* pointsUser: IPoints[]; */
  tasks: ITasks[];
  registerPointUser: () => void;
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
  getTasks: (token:string) => void;
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

export interface IUser {
  id: number;
  name: string;
  email: string;
  isAdm: boolean;
  password: string;
  office?: string;
  shift?: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IDefaultProps) => {
  const [user, setUser] = useState <IUser | null> (null);
  const [tasks, setTasks] = useState<ITasks[]>([]);

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

      setUser(response.data.user)

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

  const registerPointUser = () => {
    const date = new Date();
    const idUser = user?.id
    console.log(idUser)
    console.log(date)
  }

  const getTasks = async (token:string) => {
    try {
      const response = await api.get("/tasks", {headers:{Authorization:`
        Bearer ${token}
      `}});

      setTasks(response.data)

    } catch (error:any) {
      toast.error(error);
    }
  }

  return (
    <UserContext.Provider value={{ registerUser, loginUser, logout, user, tasks, registerPointUser, setTasks, getTasks }}>
      {children}
    </UserContext.Provider>
  );
};