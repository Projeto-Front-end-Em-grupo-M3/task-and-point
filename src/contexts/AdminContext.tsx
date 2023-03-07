import { createContext } from "react";
import { IDefaultProps } from "./userContext";

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
