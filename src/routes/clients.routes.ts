import { Router } from "express";
import { createClientController } from "../controllers/clients.controllers";

const clientsRoutes = Router();

clientsRoutes.post("", createClientController);

export { clientsRoutes };
