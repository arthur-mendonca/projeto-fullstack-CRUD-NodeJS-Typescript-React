import { z } from "zod";
import { contactSchemaResponse } from "./contacts.schema";

export const clientSchemaResponse = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  admin: z.boolean().default(false),
  created_at: z.date(),
});

export const clientSchemaRequest = clientSchemaResponse
  .omit({
    created_at: true,
    id: true,
  })
  .extend({ password: z.string(), admin: z.boolean().nullish().optional() });

export const clientUpdateSchema = clientSchemaResponse
  .omit({
    id: true,
    created_at: true,
  })
  .partial();

export const clientSchemaRelatedResponse = clientSchemaResponse.omit({});

export const getClientByIdSchema = clientSchemaResponse.extend({
  contacts: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      email: z.string().email(),
      phone: z.string(),
      created_at: z.date(),
    })
  ),
});
