import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Home } from "../pages/home";
import { ProtectedRoute } from "../components/protectedRoute/protectedRoute";
import { RegisterPage } from "../pages/register";
import { ProtectedLayout } from "../components/protectedLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<ProtectedLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};
