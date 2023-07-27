import { z } from "zod";
import {
  clientSchemaRelatedResponse,
  clientSchemaRequest,
  clientSchemaResponse,
} from "./client.schema";

export const contactSchemaResponse = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  created_at: z.date(),
  client: clientSchemaRelatedResponse.nullish(),
});

export const contactSchemaRequest = contactSchemaResponse.omit({
  id: true,
  created_at: true,
});

export const contactUpdateSchema = clientSchemaResponse
  .omit({
    id: true,
    created_at: true,
    clientId: true,
  })
  .partial();
