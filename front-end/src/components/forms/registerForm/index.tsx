import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { clientRegisterSchema } from "../../../schemas/registerFormSchema";
import { TClientRegister } from "../../../interfaces/clientRegister.interfaces";
import { Button } from "../../../styles/Buttons";
import { StyledInput, StyledRegisterForm } from "./style";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TClientRegister>({
    resolver: zodResolver(clientRegisterSchema),
  });

  return (
    <>
      <StyledRegisterForm onSubmit={handleSubmit((data) => console.log(data))}>
        <StyledInput {...register("name")} placeholder="Name" />
        {errors.name?.message && <span>{errors.name.message}</span>}
        <StyledInput {...register("email")} placeholder="Email" />
        {errors.email?.message && <span>{errors.email.message}</span>}
        <StyledInput {...register("password")} placeholder="Password" />
        {errors.password?.message && <span>{errors.password.message}</span>}
        <StyledInput {...register("phone")} placeholder="Phone" />
        {errors.phone?.message && <span>{errors.phone.message}</span>}
        <Button>Registrar</Button>
      </StyledRegisterForm>
    </>
  );
};
