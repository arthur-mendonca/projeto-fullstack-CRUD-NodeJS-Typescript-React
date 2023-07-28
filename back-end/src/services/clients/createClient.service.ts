import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import {
  TClientRequest,
  TClientResponse,
} from "../../interfaces/clients.interface";
import { clientSchemaResponse } from "../../schemas/client.schema";
import { AppError } from "../../errors";
import { hash } from "bcryptjs";

const createClientService = async (
  requestData: TClientRequest
): Promise<TClientResponse> => {
  const { email, password, name, phone } = requestData;
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const findExistingClient = await clientRepo.findOne({
    where: { email: requestData.email },
  });
  if (findExistingClient) {
    throw new AppError("Client already exists", 409);
  }

  const hashedPassword = await hash(password, 10);
  const createClient: Client = clientRepo.create({
    name,
    email,
    password: hashedPassword,
    phone,
  });
  await clientRepo.save(createClient);

  let client = clientSchemaResponse.parse(createClient);

  return client;
};

export { createClientService };
