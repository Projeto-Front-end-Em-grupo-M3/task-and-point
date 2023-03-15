import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ITasks, IPoints, AdminContext } from "./AdminContext";

export interface IDefaultProps {
  children: ReactNode;
}

interface IUserContext {
  registerUser: (formData: IUserRegister) => Promise<void>;
  loginUser: (formData: IUserLogin) => Promise<void>;
  logout: () => void;
  user: IUser | null;
  tasks: ITasks[];
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
  getTasks: (token: string | null) => void;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  office: string;
  shift: string;
  isAdm: boolean;
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
  useEffect(() => {
    const userJson = localStorage.getItem("@TaskandPoint:user");
    if (userJson) {
      setUser(JSON.parse(userJson));
    }
  }, []);

  const [user, setUser] = useState<IUser | null>(null);
  const [tasks, setTasks] = useState<ITasks[]>([]);

  const navigate = useNavigate();

  const registerUser = async (formData: IUserRegister) => {
    try {
      const response = await api.post("/users", formData);

      toast.success("Cadastro realizado com sucesso");
      navigate("/login");
    } catch (error: any) {
      toast.error("Esse email já existe");
    }
  };

  const loginUser = async (formData: IUserLogin) => {
    try {
      const response = await api.post("/login", formData);

      setUser(response.data.user);

      localStorage.setItem(
        "@TaskandPoint:token",
        JSON.stringify(response.data.accessToken)
      );

      localStorage.setItem(
        "@TaskandPoint:user",
        JSON.stringify(response.data.user)
      );

      toast.success("Login realizado com sucesso");
      if (response.data.user.isAdm === true) {
        navigate("/adminDashboard");
      } else if (response.data.user.isAdm == "false") {
        navigate("/userDashboard");
      } else {
        navigate("/userDashboard");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(
        "Problema de conexão (API), tente novamente em alguns minutos"
      );
    }
  };

  const logout = () => {
    localStorage.removeItem("@TaskandPoint:token");
    localStorage.removeItem("@TaskandPoint:user");
    navigate("/");
  };

  const getTasks = async (token: string | null) => {
    try {
      const response = await api.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(response.data);
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        logout,
        user,
        tasks,
        setTasks,
        getTasks,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
