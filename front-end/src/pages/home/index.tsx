import { LoginForm } from "../../components/forms/loginForm";
import { HomeContainer, HomeWrapper } from "./style";

export const Home = () => {
  return (
    <HomeWrapper>
      <HomeContainer>
        <LoginForm>
          <h1>Login</h1>
        </LoginForm>
      </HomeContainer>
    </HomeWrapper>
  );
};
