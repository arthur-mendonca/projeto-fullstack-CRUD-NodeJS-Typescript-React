import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  listAllContactsController,
  listContactsPDFController,
  updateContactController,
} from "../controllers/contacts.controllers";
import verifyIdMiddleware from "../middlewares/verifyClientId.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemaRequest } from "../schemas/contacts.schema";
import { authenticationMiddleware } from "../middlewares/authenticate.middleware";
import verifyContactIdMiddleware from "../middlewares/verifyContactId.middleware";

const contactsRoutes = Router();

contactsRoutes.get("/pdf", authenticationMiddleware, listContactsPDFController);
contactsRoutes.post(
  "/:id",
  authenticationMiddleware,
  ensureDataIsValid(contactSchemaRequest),
  createContactController
);
contactsRoutes.get("", /*authenticationMiddleware*/ listAllContactsController);
contactsRoutes.get(
  "/:id",
  authenticationMiddleware,
  verifyContactIdMiddleware,
  getContactByIdController
);
contactsRoutes.patch(
  "/:id",
  authenticationMiddleware,
  verifyContactIdMiddleware,
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  authenticationMiddleware,
  verifyContactIdMiddleware,
  deleteContactController
);

export { contactsRoutes };
