import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  listAllContactsController,
  listContactsPDFController,
  updateContactController,
} from "../controllers/contacts.controllers";
import verifyIdMiddleware from "../middlewares/verifyId.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemaRequest } from "../schemas/contacts.schema";
import { authenticationMiddleware } from "../middlewares/authenticate.middleware";

const contactsRoutes = Router();

contactsRoutes.get("/pdf", authenticationMiddleware, listContactsPDFController);
contactsRoutes.post(
  "/:id",
  authenticationMiddleware,
  verifyIdMiddleware,
  ensureDataIsValid(contactSchemaRequest),
  createContactController
);
contactsRoutes.get("", authenticationMiddleware, listAllContactsController);
contactsRoutes.get(
  "/:id",
  authenticationMiddleware,
  verifyIdMiddleware,
  getContactByIdController
);
contactsRoutes.patch(
  "/:id",
  authenticationMiddleware,
  verifyIdMiddleware,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  authenticationMiddleware,
  verifyIdMiddleware,
  deleteContactController
);

export { contactsRoutes };
