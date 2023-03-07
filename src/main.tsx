import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TasksPointContextProvider } from "./contexts/tasksPointContext";
import { UserContextProvider } from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <TasksPointContextProvider>
        <App />
      </TasksPointContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
