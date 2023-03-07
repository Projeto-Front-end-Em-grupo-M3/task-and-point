import { createContext, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
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

export const AdminContext = createContext({} as IAdminContext);

export const AdminContextProvider = ({ children }: IDefaultProps) => {
  /*   const token = localStorage.getItem("@task-and-point-token");*/
  const [users, setUsers] = useState<IUser[]>([]);
  const [adm, setAdm] = useState<IUser | null>(null);
  const [employeSearch, setEmployeSearch] = useState<IUser[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiaWF0IjoxNjc4MjIwNzQ1LCJleHAiOjE2NzgyMjQzNDUsInN1YiI6IjEifQ.sx1MuuXNtiqU0H2vDfa_n6dZV5rZCXJKI0FzYtNxYKU";
  useEffect(() => {
    getAllUsers();
    getAdminInfo(1);
  }, []);

  const getAllUsers = async () => {
    try {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.get("/users");
      const employes = response.data.filter(
        (employe: { id: number }) => employe.id != 1
      );
      setUsers(employes);
      setEmployeSearch(employes);
    } catch (error) {
      toast.error("Algo deu errado, tente novamente mais tarde");
    }
  };

  const getAdminInfo = async (id: number) => {
    try {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.get(`/users/${id}`);
      setAdm(response.data);
    } catch (error) {
      toast.error("Algo deu errado, tente novamente mais tarde");
    }
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
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
