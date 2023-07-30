import { Router } from "express";
import {
  createClientController,
  getClientByIdController,
  listAllClientsController,
  updateClientController,
  deleteClientController,
  listClientsPDFController,
} from "../controllers/clients.controllers";
import verifyIdMiddleware from "../middlewares/verifyClientId.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { clientSchemaRequest } from "../schemas/client.schema";
import { authenticationMiddleware } from "../middlewares/authenticate.middleware";
import { verifyAdminMiddleware } from "../middlewares/verifyAdmin.middleware";

const clientsRoutes = Router();

clientsRoutes.get(
  "/pdf",
  /*authenticationMiddleware*/ listClientsPDFController
);
clientsRoutes.get("", authenticationMiddleware, listAllClientsController);
clientsRoutes.post(
  "",
  ensureDataIsValid(clientSchemaRequest),
  createClientController
);

clientsRoutes.patch(
  "/:id",
  /*authenticationMiddleware*/
  verifyIdMiddleware,
  updateClientController
);
clientsRoutes.get(
  "/:id",
  /*authenticationMiddleware*/
  verifyIdMiddleware,
  getClientByIdController
);
clientsRoutes.delete(
  "/:id",
  /*authenticationMiddleware*/
  verifyIdMiddleware,
  deleteClientController
);

export { clientsRoutes };
