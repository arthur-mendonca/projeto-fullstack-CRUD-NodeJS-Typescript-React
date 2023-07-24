import { z } from "zod";

import {
  clientSchemaRequest,
  clientSchemaResponse,
} from "../schemas/client.schema";

type TClientRequest = z.infer<typeof clientSchemaRequest>;

type TClientResponse = z.infer<typeof clientSchemaResponse>;

export { TClientRequest, TClientResponse };
