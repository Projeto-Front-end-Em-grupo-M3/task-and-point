import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      Point and tasks
      <GlobalStyles />
      <ToastContainer />
    </div>
  );
}

export default App;
