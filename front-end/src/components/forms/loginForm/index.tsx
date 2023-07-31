import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "../../../schemas/loginFormSchema";
import { TLoginFormType } from "../../../interfaces/login.interfaces";
import { LoginContext } from "../../../contexts/loginContext/loginContext";
import { useContext } from "react";
import {
  StyledLoginButton,
  StyledInput,
  StyledLoginForm,
  StyledRegisterButton,
  ButtonsWrapper,
} from "./style";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  children: React.ReactNode;
}

export const LoginForm = ({ children }: LoginFormProps) => {
  const navigate = useNavigate();
  const { loginRequest } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormType>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async (data: TLoginFormType) => {
    await loginRequest(data);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onSubmit)}>
      {children}
      <StyledInput {...register("email")} type="email" placeholder="Email" />
      {errors.email?.message && <p>{errors.email.message}</p>}
      <StyledInput
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      {errors.password?.message && <p>{errors.password.message}</p>}
      <ButtonsWrapper>
        <StyledLoginButton>Entrar</StyledLoginButton>
        <StyledRegisterButton onClick={() => navigate("/register")}>
          Registrar
        </StyledRegisterButton>
      </ButtonsWrapper>
    </StyledLoginForm>
  );
};
