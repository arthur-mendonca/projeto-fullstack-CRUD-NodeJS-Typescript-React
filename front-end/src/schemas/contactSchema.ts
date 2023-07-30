import { z } from "zod";

export const AddContactSchema = z.object({
  name: z.string().nonempty({ message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().nonempty({ message: "Telefone é obrigatório" }),
});

export const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

export const UpdateContactSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
});
