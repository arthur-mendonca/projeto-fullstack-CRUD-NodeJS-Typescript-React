import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TContactById } from "../../interfaces/contacts.interface";
import { Contact } from "../../entities/contacts.entity";
import { contactSchemaResponse } from "../../schemas/contacts.schema";

const getContactByIdService = async (
  contactId: number
): Promise<TContactById | null> => {
  const contactsRepo: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContact = await contactsRepo.findOne({
    where: { id: contactId },
    relations: ["client"],
  });

  console.log(findContact);

  const parsedContact = contactSchemaResponse.parse(findContact);

  return parsedContact;
};

export { getContactByIdService };
