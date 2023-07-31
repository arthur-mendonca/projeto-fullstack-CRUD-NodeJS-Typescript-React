import { z } from "zod";

import {
  clientSchemaRequest,
  clientSchemaResponse,
  clientUpdateSchema,
  getClientByIdSchema,
} from "../schemas/client.schema";

type TClientRequest = z.infer<typeof clientSchemaRequest>;

type TClientResponse = z.infer<typeof clientSchemaResponse>;

type TClientUpdate = z.infer<typeof clientUpdateSchema>;

type TGetClientById = z.infer<typeof getClientByIdSchema>;

export { TClientRequest, TClientResponse, TClientUpdate, TGetClientById };
