import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";
import { Footer } from "../footer";

export const ProtectedLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
