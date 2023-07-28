import { LoginForm } from "../../components/forms/loginForm";
// import { Container } from "../../styles/Global";
import { HomeWrapper } from "./style";

export const Home = () => {
  return (
    <HomeWrapper>
      {/* <Container> */}
      <LoginForm></LoginForm>
      {/* </Container> */}
    </HomeWrapper>
  );
};
