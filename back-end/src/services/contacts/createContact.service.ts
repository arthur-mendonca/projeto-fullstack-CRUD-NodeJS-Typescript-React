import { Repository } from "typeorm";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interface";
import { Contact } from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import { contactSchemaResponse } from "../../schemas/contacts.schema";
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../errors";

const createContactService = async (
  clientId: string,
  requestData: TContactRequest
): Promise<TContactResponse> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOne({ where: { id: clientId } });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const createContact: Contact = contactRepo.create({
    ...requestData,
    client,
  });
  await contactRepo.save(createContact);

  let newContact = contactSchemaResponse.parse(createContact);
  return newContact;
};

export { createContactService };
