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

const contactsRoutes = Router();

contactsRoutes.get("/pdf", listContactsPDFController);
contactsRoutes.post(
  "/:id",
  verifyIdMiddleware,
  ensureDataIsValid(contactSchemaRequest),
  createContactController
);
contactsRoutes.get("", listAllContactsController);
contactsRoutes.get("/:id", verifyIdMiddleware, getContactByIdController);
contactsRoutes.patch("/:id", verifyIdMiddleware, updateContactController);
contactsRoutes.delete("/:id", verifyIdMiddleware, deleteContactController);

export { contactsRoutes };
