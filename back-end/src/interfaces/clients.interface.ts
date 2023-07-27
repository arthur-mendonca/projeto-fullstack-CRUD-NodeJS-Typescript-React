import { z } from "zod";

import {
  clientSchemaRequest,
  clientSchemaResponse,
  clientUpdateSchema,
} from "../schemas/client.schema";

type TClientRequest = z.infer<typeof clientSchemaRequest>;

type TClientResponse = z.infer<typeof clientSchemaResponse>;

type TClientUpdate = z.infer<typeof clientUpdateSchema>;

export { TClientRequest, TClientResponse, TClientUpdate };
