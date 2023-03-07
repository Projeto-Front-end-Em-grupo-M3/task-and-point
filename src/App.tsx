import { GlobalStyles } from "./styles/GlobalStyles";
import { AppRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer />
    </>
  );
}
