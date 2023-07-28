import { z } from "zod";

export const clientSchemaResponse = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  created_at: z.date(),
});

export const clientSchemaRequest = clientSchemaResponse
  .omit({
    created_at: true,
    id: true,
  })
  .extend({ password: z.string() });

export const clientUpdateSchema = clientSchemaResponse
  .omit({
    id: true,
    created_at: true,
  })
  .partial();

export const clientSchemaRelatedResponse = clientSchemaResponse.omit({});
