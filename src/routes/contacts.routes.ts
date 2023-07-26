import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  listAllContactsController,
  updateContactController,
} from "../controllers/contacts.controllers";
import verifyIdMiddleware from "../middlewares/verifyId.middleware";

const contactsRoutes = Router();

contactsRoutes.post("/:id", verifyIdMiddleware, createContactController);
contactsRoutes.get("", listAllContactsController);
contactsRoutes.get("/:id", verifyIdMiddleware, getContactByIdController);
contactsRoutes.patch("/:id", verifyIdMiddleware, updateContactController);
contactsRoutes.delete("/:id", verifyIdMiddleware, deleteContactController);

export { contactsRoutes };
