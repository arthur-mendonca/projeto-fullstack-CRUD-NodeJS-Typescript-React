import { z } from "zod";
import { LoginFormSchema } from "../schemas/loginFormSchema";

export type TLoginFormType = z.infer<typeof LoginFormSchema>;
