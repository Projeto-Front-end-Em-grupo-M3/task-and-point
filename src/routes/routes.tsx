import { Route, Routes } from "react-router";
import AdminDashboard from "../pages/adminDashboard";
import UserDashboard from "../pages/userDashboard";
import LoginPage from "../pages/login";
import RegisterForm from "../pages/register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
      <Route path="/userDashboard" element={<UserDashboard />} />
    </Routes>
  );
};
