import { z } from "zod";
import { clientRegisterSchema } from "../schemas/registerFormSchema";

export type TClientRegister = z.infer<typeof clientRegisterSchema>;
