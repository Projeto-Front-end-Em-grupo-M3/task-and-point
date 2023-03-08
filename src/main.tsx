import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TasksPointContextProvider } from "./contexts/AdminContext";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <TasksPointContextProvider>
          <App />
        </TasksPointContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
