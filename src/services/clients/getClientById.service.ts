import { Repository } from "typeorm";
import { Client } from "../../entities/clients.entity";
import { AppDataSource } from "../../data-source";
import { TClientResponse } from "../../interfaces/clients.interface";
import { AppError } from "../../errors";
import { clientSchemaResponse } from "../../schemas/client.schema";

const getClientByIdService = async (
  id: number
): Promise<TClientResponse | null> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOne({ where: { id: id } });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  return clientSchemaResponse.parse(client);
};

export default getClientByIdService;
