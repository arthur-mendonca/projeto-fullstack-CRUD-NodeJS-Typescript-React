import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { clientSchemaResponse } from "../../schemas/client.schema";
import { TClientResponse } from "../../interfaces/clients.interface";
import { z } from "zod";

const listAllClientsService = async (): Promise<TClientResponse[]> => {
  const clientsRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const clients: Client[] = await clientsRepo.find();

  return z.array(clientSchemaResponse).parse(clients);
};

export default listAllClientsService;
