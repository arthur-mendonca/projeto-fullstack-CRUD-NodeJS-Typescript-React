import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { contactSchemaResponse } from "../../schemas/contacts.schema";
import { z } from "zod";
import { TContactResponse } from "../../interfaces/contacts.interface";
import { Contact } from "../../entities/contacts.entity";

const listAllContactsService = async (): Promise<TContactResponse[]> => {
  const clientsRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const clients = await clientsRepo.find({ relations: { client: true } });

  return z.array(contactSchemaResponse).parse(clients);
};

export { listAllContactsService };
