import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "../pages/adminDashboard";

const Router = () => {
  return (
    <>
      <Routes>
        {/*  <Route path="/" element={"Colocar a pagina Login"} />
        <Route path="/register" element={"Colocar a pagina registro"} />
        <Route
          path="/userDashboard"
          element={"Colocar a pagina dashboard de usuario"}
        /> */}
        <Route path="/adminDashboard" /* element={<AdminDashboard />}  */ />
      </Routes>
      <ToastContainer />
    </>
  );
};
export default Router;
