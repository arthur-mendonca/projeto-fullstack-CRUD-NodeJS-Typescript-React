import { z } from "zod";

export const AddContactSchema = z.object({
  name: z.string().nonempty({ message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().nonempty({ message: "Telefone é obrigatório" }),
});
