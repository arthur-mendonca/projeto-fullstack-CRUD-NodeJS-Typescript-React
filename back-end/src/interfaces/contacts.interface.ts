import { z } from "zod";

import {
  contactSchemaRequest,
  contactSchemaResponse,
  contactUpdateSchema,
} from "../schemas/contacts.schema";

export type TContactRequest = z.infer<typeof contactSchemaRequest>;
export type TContactResponse = z.infer<typeof contactSchemaResponse>;
export type TContactUpdate = z.infer<typeof contactUpdateSchema>;
export type TContactById = z.infer<typeof contactSchemaResponse>;
