import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import {
  TClientRequest,
  TClientResponse,
} from "../../interfaces/clients.interface";
import { clientSchemaResponse } from "../../schemas/client.schema";
import { AppError } from "../../errors";

const createClientService = async (
  requestData: TClientRequest
): Promise<TClientResponse> => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const findExistingClient = await clientRepo.findOne({
    where: { email: requestData.email },
  });
  if (findExistingClient) {
    throw new AppError("Client already exists", 409);
  }

  const createClient: Client = clientRepo.create(requestData);
  await clientRepo.save(createClient);

  let client = clientSchemaResponse.parse(createClient);

  return client;
};

export { createClientService };
