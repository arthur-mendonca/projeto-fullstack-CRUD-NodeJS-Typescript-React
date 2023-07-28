import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "../../../schemas/loginFormSchema";
import { TLoginFormType } from "../../../interfaces/login.interfaces";
import { LoginContext } from "../../../contexts/loginContext/loginContext";
import { useContext } from "react";
import { Button } from "../../../styles/Buttons";

export const LoginForm = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} type="email" placeholder="Email" />
      {errors.email?.message && <p>{errors.email.message}</p>}
      <input type="password" placeholder="Password" {...register("password")} />
      {errors.password?.message && <p>{errors.password.message}</p>}
      <Button>Login</Button>
    </form>
  );
};
