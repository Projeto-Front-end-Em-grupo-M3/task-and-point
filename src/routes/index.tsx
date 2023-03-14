import { Route, Routes } from "react-router";
import AdminDashboard from "../pages/adminDashboard";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/login";
import RegisterForm from "../pages/register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/userDashboard" element={"<UserDashboard />"} />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
    </Routes>
  );
};
