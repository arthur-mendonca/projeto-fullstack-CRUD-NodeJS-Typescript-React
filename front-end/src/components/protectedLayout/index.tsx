import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";
import { Footer } from "../footer";
import { Container } from "./style";

export const ProtectedLayout = () => {
  return (
    <Container>
      <NavBar />
      <Outlet />
      <Footer />
    </Container>
  );
};
