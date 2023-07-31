import { RegisterForm } from "../../components/forms/registerForm";
import { RegisterPageWrapper, StyledTitle } from "./style";

export const RegisterPage = () => {
  return (
    <RegisterPageWrapper>
      <RegisterForm>
        <StyledTitle type={"heading1"}>Registrar</StyledTitle>
      </RegisterForm>
    </RegisterPageWrapper>
  );
};
