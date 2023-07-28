import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return <>{token ? <Outlet /> : navigate("/")}</>;
};
