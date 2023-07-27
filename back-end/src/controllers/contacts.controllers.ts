import { Response, Request } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { listAllContactsService } from "../services/contacts/listAllContacts.service";
import { getContactByIdService } from "../services/contacts/getContactById.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { listContactsPDFService } from "../services/contacts/listContactsPDF.service";
import path from "path";
import ejs from "ejs";

const createContactController = async (
  request: Request,
  response: Response
) => {
  const requestData = request.body;
  const clientId = Number(request.params.id);

  return response
    .status(201)
    .json(await createContactService(clientId, requestData));
};

const listAllContactsController = async (
  request: Request,
  response: Response
) => {
  return response.status(200).json(await listAllContactsService());
};

const getContactByIdController = async (
  request: Request,
  response: Response
) => {
  const contactId = Number(request.params.id);

  return response.status(200).json(await getContactByIdService(contactId));
};

const updateContactController = async (
  request: Request,
  response: Response
) => {
  const contactId = Number(request.params.id);
  const requestData = request.body;

  return response
    .status(200)
    .json(await updateContactService(contactId, requestData));
};

const deleteContactController = async (
  request: Request,
  response: Response
) => {
  const contactId = Number(request.params.id);
  return response.status(200).json(await deleteContactService(contactId));
};

const listContactsPDFController = async (
  request: Request,
  response: Response
) => {
  const contacts = await listContactsPDFService();

  const filePath = path.join(__dirname, "../services/contacts/contacts.ejs");

  const createPDF = ejs.renderFile(filePath, { contacts }, (err, html) => {
    if (err) {
      console.log(err);
    } else {
      console.log("PDF gerado com sucesso");
    }
    return response.send(html);
  });
  return response.status(200).json(createPDF);
};
export {
  createContactController,
  listAllContactsController,
  getContactByIdController,
  updateContactController,
  deleteContactController,
  listContactsPDFController,
};
