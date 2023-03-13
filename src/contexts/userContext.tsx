import { createContext, ReactNode, useEffect, useState } from "react";
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
  isAdm: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IDefaultProps) => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>();
  const token = localStorage.getItem("@TaskandPoint:token");
  const navigate = useNavigate();

  useEffect(() => {
    const Id = () => {
      if (token) {
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

        return JSON.parse(jsonPayload).sub;
      }
    };

    const isAdm = async (id: string) => {
      if (token) {
        try {
          const response = await api.get(`/users/${id}`, {
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          });

          response.data.isAdm
            ? navigate("/adminDashboard")
            : navigate("/userDashboard");
        } catch (error) {
          console.log(error);
        }
      }
    };

    isAdm(Id());
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

      setIsAdmin(response.data.user.isAdm);

      toast.success("Login realizado com sucesso");

      if (response.data.user.isAdm === false) {
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

    navigate("/");
  };

  return (
    <UserContext.Provider value={{ registerUser, loginUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
