import { Repository } from "typeorm";
import { Client } from "../../entities/clients.entity";
import { AppDataSource } from "../../data-source";
import { TClientResponse } from "../../interfaces/clients.interface";

const getClientByIdService = async (
  id: number
): Promise<TClientResponse | null> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOne({ where: { id: id } });

  return client;
};

export default getClientByIdService;
