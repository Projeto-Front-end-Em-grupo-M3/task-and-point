import { createContext } from "react";
import { IDefaultProps } from "./UserContext";

interface ItasksPointContext {}

export const TasksPointContext = createContext({} as ItasksPointContext);

export const TasksPointContextProvider = ({ children }: IDefaultProps) => {
  const a = "abobrinha";

  return (
    <TasksPointContext.Provider value={{}}>
      {children}
    </TasksPointContext.Provider>
  );
};
