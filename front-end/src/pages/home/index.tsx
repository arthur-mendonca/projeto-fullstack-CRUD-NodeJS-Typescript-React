import { LoginForm } from "../../components/forms/loginForm";
import { HomeContainer, HomeWrapper, StyledTitle } from "./style";

export const Home = () => {
  return (
    <HomeWrapper>
      <HomeContainer>
        <LoginForm>
          <StyledTitle type={"heading1"}>Login</StyledTitle>
        </LoginForm>
      </HomeContainer>
    </HomeWrapper>
  );
};
