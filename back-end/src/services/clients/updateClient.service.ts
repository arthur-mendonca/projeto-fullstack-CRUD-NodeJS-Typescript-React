import { Repository } from "typeorm";
import { TClientUpdate } from "../../interfaces/clients.interface";
import { clientUpdateSchema } from "../../schemas/client.schema";
import { Client } from "../../entities/clients.entity";
import { AppDataSource } from "../../data-source";

const updateClientService = async (
  requestId: string,
  requestData: TClientUpdate
): Promise<TClientUpdate> => {
  const clientsRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const currentClient: Client | null = await clientsRepo.findOne({
    where: { id: requestId },
  });

  await clientsRepo.update(currentClient!.id, requestData);

  const updatedClient = await clientsRepo.findOne({ where: { id: requestId } });

  return clientUpdateSchema.parse(updatedClient);
};

export default updateClientService;
