import { createContext, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { boolean } from "yup";
import { api } from "../services/api";
import { IDefaultProps } from "./userContext";

interface IAdminContext {
  users: IUser[] | null;
  setUsers: React.Dispatch<SetStateAction<IUser[]>>;
  getAdminInfo: (id: number) => Promise<void>;
  adm: IUser | null;
  setAdm: React.Dispatch<SetStateAction<IUser | null>>;
  employeSearch: IUser[];
  setEmployeSearch: React.Dispatch<SetStateAction<IUser[]>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  idButton: number;
  setIdButton: React.Dispatch<SetStateAction<number>>;
  getTaskById: (id: number) => Promise<void>;
  tasks: ITasks[];
  setTasks: React.Dispatch<SetStateAction<ITasks[]>>;
  createTask: (data: ITasks) => Promise<void>;
  deleteTask: (id: any) => Promise<void>;
  tasksSearch: ITasks[];
  deleteUser: (id: number, name: string) => Promise<void>;
  getPointsUser: (id: number) => void;
  pointsUser: IPoints[];
  logout: () => void;
  modalPoints: boolean;
  setModalPoints: React.Dispatch<SetStateAction<boolean>>;
  modalDelete: boolean;
  setModalDelete: React.Dispatch<SetStateAction<boolean>>;
  getAllUsers: () => Promise<void>;
  getAllTasks: () => Promise<void>;
  token: string | null;
  getAllPoints: () => Promise<void>;
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

export interface ITasks {
  name: string;
  id: number;
  task: string;
  status: string;
}

export interface IPoints {
  point: string;
  name: string;
  userId: number;
}

export const AdminContext = createContext({} as IAdminContext);

export const AdminContextProvider = ({ children }: IDefaultProps) => {
  const token = localStorage.getItem("@TaskandPoint:token");
  const [users, setUsers] = useState<IUser[]>([]);
  const [adm, setAdm] = useState<IUser | null>(null);
  const [employeSearch, setEmployeSearch] = useState<IUser[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [idButton, setIdButton] = useState<number>(0);
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [tasksSearch, setTasksSearch] = useState<ITasks[]>([]);
  const [allPoints, setAllPoints] = useState<IPoints[]>([]);
  const [pointsUser, setPointsUser] = useState<IPoints[]>([]);
  const [modalPoints, setModalPoints] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
    getAdminInfo(1);
    getAllTasks();
  }, []);

  const getAllUsers = async () => {
    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
          token
        )}`;
        const response = await api.get("/users");
        const employes = response.data.filter(
          (employe: { id: number }) => employe.id != 1
        );
        setUsers(employes);
        setEmployeSearch(employes);
      } catch (error) {
        console.error("Algo deu errado, tente novamente mais tarde");
      }
    }
  };

  const getAdminInfo = async (id: number) => {
    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
          token
        )}`;
        const response = await api.get(`/users/${id}`);
        setAdm(response.data);
      } catch (error) {
        console.error("Algo deu errado, tente novamente mais tarde");
      }
    }
  };

  const getTaskById = async (id: number) => {
    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
          token
        )}`;
        const response = await api.get(`/tasks/${id}`);
        setTasks(response.data.taskList);
      } catch (error) {
        console.error("Algo deu errado, tente novamente mais tarde");
      }
    }
  };

  const getAllTasks = async () => {
    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
          token
        )}`;
        const response = await api.get(`/tasks`);
        setTasks(response.data);
        setTasksSearch(response.data);
      } catch (error) {
        console.error("Tente novamente");
      }
    }
  };

  const createTask = async (data: ITasks) => {
    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
          token
        )}`;
        const response = await api.post(`/tasks`, data);
        setTasks([...tasks, response.data]);
        toast.success("Atividade cadastrada");
      } catch (error) {
        console.error("Tente novamente");
      }
    }
  };

  const deleteTask = async (id: number, isDeleteUser: boolean = false) => {
    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
          token
        )}`;
        await api.delete(`/tasks/${id}`);

        const newTasks = tasks.filter((task) => task.id !== id);
        if (!isDeleteUser) {
          setTasks(newTasks);
        }

        toast.success("Atividade excluída");
      } catch (error) {
        console.error("Tente novamente");
      }
    }
  };

  const deleteUser = async (id: number, name: string) => {
    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
          token
        )}`;
        await api.delete(`/users/${id}`);
        const newUsers = users.filter((user) => user.id !== id);
        setUsers(newUsers);
        const filteredTasks = tasks.filter((task) => task.name == name);
        filteredTasks.forEach((task) => {
          deleteTask(task.id, true);
        });
        const remainTasks = tasks.filter((task) => task.name !== name);
        setTasks(remainTasks);
        setModal(false);
        toast.warning("usuário excluído");
      } catch (error) {
        console.error("Tente novamente");
      }
    }
  };

  const getAllPoints = async () => {
    if (token) {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
          token
        )}`;
        const response = await api.get(`/points/`);
        setAllPoints(response.data);
      } catch (error) {
        console.error("Tente novamente");
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("@TaskandPoint:token");
    toast.warning("Você saiu");
    navigate("/login");
  };

  useEffect(() => {
    getAllPoints();
  }, []);

  const getPointsUser = (id: number) => {
    const newPoints = allPoints.filter((point) => point.userId === id);
    setPointsUser(newPoints);
  };

  return (
    <AdminContext.Provider
      value={{
        users,
        adm,
        setUsers,
        getAdminInfo,
        setAdm,
        employeSearch,
        setEmployeSearch,
        modal,
        setModal,
        idButton,
        setIdButton,
        getTaskById,
        tasks,
        setTasks,
        createTask,
        deleteTask,
        tasksSearch,
        deleteUser,
        getPointsUser,
        pointsUser,
        logout,
        modalPoints,
        setModalPoints,
        modalDelete,
        setModalDelete,
        getAllTasks,
        getAllUsers,
        token,
        getAllPoints,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
