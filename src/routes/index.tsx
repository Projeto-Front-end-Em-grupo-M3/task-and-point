import { Route, Routes } from "react-router";
import AdminDashboard from "../pages/adminDashboard";
import LoginPage from "../pages/login";
import RegisterForm from "../pages/register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route
        path="/userDashboard"
        element={"Colocar a pagina dashboard de usuario"}
      />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
    </Routes>
  );
};
