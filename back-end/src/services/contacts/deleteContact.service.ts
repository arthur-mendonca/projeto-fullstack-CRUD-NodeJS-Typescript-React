import { Repository } from "typeorm";
import { Contact } from "../../entities/contacts.entity";
import { AppDataSource } from "../../data-source";

const deleteContactService = async (id: string): Promise<void | null> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const contact = await contactRepo.findOne({ where: { id: id } });
  console.log(contact);
  await contactRepo.remove(contact!);
};

export { deleteContactService };
