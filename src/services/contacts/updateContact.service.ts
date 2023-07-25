import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { TContactUpdate } from "../../interfaces/contacts.interface";
import { contactUpdateSchema } from "../../schemas/contacts.schema";

const updateContactService = async (
  contactId: number,
  requestData: TContactUpdate
): Promise<TContactUpdate> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const findContact = contactRepo.findOne({ where: { id: contactId } });

  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepo.update(contactId, requestData);

  const updatedContact = await contactRepo.findOneBy({ id: contactId });

  return contactUpdateSchema.parse(updatedContact);
};

export { updateContactService };
