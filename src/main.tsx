import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AdminContextProvider } from "./contexts/adminContext";
import { UserContextProvider } from "./contexts/userContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </AdminContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
