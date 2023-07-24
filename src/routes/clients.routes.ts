import { Router } from "express";
import {
  createClientController,
  getClientByIdController,
  listAllClientsController,
  updateClientController,
  deleteClientController,
} from "../controllers/clients.controllers";
import verifyIdMiddleware from "../middlewares/verifyId.middleware";

const clientsRoutes = Router();

clientsRoutes.post("", createClientController);
clientsRoutes.get("", listAllClientsController);
clientsRoutes.patch("/:id", verifyIdMiddleware, updateClientController);
clientsRoutes.get("/:id", verifyIdMiddleware, getClientByIdController);
clientsRoutes.delete("/:id", verifyIdMiddleware, deleteClientController);

export { clientsRoutes };
