import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;