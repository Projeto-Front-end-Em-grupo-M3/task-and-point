import { createContext, ReactNode } from "react";

export interface IDefaultProps {
  children: ReactNode;
}

interface IUserContext {}

export const UserContext = createContext({} as IUserContext);

export const UserContextProvider = ({ children }: IDefaultProps) => {
  const a = "abobrinha";

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
