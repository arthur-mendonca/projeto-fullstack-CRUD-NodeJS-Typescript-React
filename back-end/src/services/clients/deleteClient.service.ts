import { Repository } from "typeorm";
import { Client } from "../../entities/clients.entity";
import { AppDataSource } from "../../data-source";

const deleteClientService = async (id: string): Promise<void | null> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const getClient = await clientRepo.findOne({ where: { id: id } });

  await clientRepo.remove(getClient!);
};

export default deleteClientService;
