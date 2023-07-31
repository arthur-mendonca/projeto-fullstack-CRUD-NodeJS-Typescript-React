import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { clientRegisterSchema } from "../../../schemas/registerFormSchema";
import { TClientRegister } from "../../../interfaces/clientRegister.interfaces";
import {
  StyledInput,
  StyledPasswordWrapper,
  StyledRegisterButton,
  StyledRegisterForm,
  StyledPasswordButton,
  StyledGoBackButton,
} from "./style";
import { Text } from "../../../styles/Text";
import React, { useContext, useState } from "react";
import { ClientsContext } from "../../../contexts/clientsContext/clientsContext";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const RegisterForm = ({ children }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { createClient } = useContext(ClientsContext);

  const showPasswordHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: TClientRegister) => {
    createClient(data);
  };

  const handleGoBackClick = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TClientRegister>({
    resolver: zodResolver(clientRegisterSchema),
  });

  return (
    <>
      <StyledRegisterForm onSubmit={handleSubmit(onSubmit)}>
        {children}
        <StyledInput {...register("name")} placeholder="Name" />
        {errors.name?.message && (
          <Text type={"error"}>{errors.name.message}</Text>
        )}
        <StyledInput {...register("email")} placeholder="Email" />
        {errors.email?.message && (
          <Text type={"error"}>{errors.email.message}</Text>
        )}
        <StyledPasswordWrapper>
          <StyledInput
            {...register("password")}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          <StyledPasswordButton
            onClick={(event) => showPasswordHandler(event)}
            style={{ background: "transparent" }}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible style={{ color: "black" }} />
            ) : (
              <AiOutlineEye style={{ color: "black" }} />
            )}
          </StyledPasswordButton>
          {errors.password?.message && (
            <Text type={"error"}>{errors.password.message}</Text>
          )}
        </StyledPasswordWrapper>
        <StyledInput {...register("phone")} placeholder="Phone" />
        {errors.phone?.message && (
          <Text type={"error"}>{errors.phone.message}</Text>
        )}
        <StyledRegisterButton>Registrar</StyledRegisterButton>
        <StyledGoBackButton onClick={handleGoBackClick}>
          Voltar
        </StyledGoBackButton>
      </StyledRegisterForm>
    </>
  );
};
