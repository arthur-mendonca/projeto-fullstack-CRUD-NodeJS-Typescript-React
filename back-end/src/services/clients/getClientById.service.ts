import { Repository } from "typeorm";
import { Client } from "../../entities/clients.entity";
import { AppDataSource } from "../../data-source";
import { TGetClientById } from "../../interfaces/clients.interface";
import { AppError } from "../../errors";
import { getClientByIdSchema } from "../../schemas/client.schema";

const getClientByIdService = async (
  id: number
): Promise<TGetClientById | null> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOne({
    where: { id: id },
    relations: { contacts: true },
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  return getClientByIdSchema.parse(client);
};

export default getClientByIdService;
