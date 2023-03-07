import { createContext, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { IDefaultProps } from "./userContext";

interface IAdminContext {
  users: IUser[] | null;
  setUsers: React.Dispatch<SetStateAction<IUser[]>>;
  /*   getAllUsers: () => Promise<void>;
   */
  getAdminInfo: (id: number) => Promise<void>;
  adm: IUser | null;
  setAdm: React.Dispatch<SetStateAction<IUser | null>>;
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
  /*   const token = localStorage.getItem("@task-and-point-token");
   */ const [users, setUsers] = useState<IUser[]>([]);
  const [adm, setAdm] = useState<IUser | null>(null);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiaWF0IjoxNjc4MTQ2NzE5LCJleHAiOjE2NzgxNTAzMTksInN1YiI6IjEifQ.tQn9r9zjL6OmlNcBRdV3eSJPEEfdpZvwb_hhqZ77K3A";

  useEffect(() => {
    getAllUsers();
    getAdminInfo(1);
  }, []);

  const getAllUsers = async () => {
    try {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.get("/users");
      setUsers(response.data);
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
        setUsers,
        getAdminInfo,
        adm,
        setAdm,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
