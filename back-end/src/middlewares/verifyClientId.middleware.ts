import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Client } from "../entities/clients.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const verifyClientIdMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  let clientId = request.params.id;

  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const findClient = await clientRepo.findOne({
    where: { id: clientId },
  });

  if (!findClient) {
    throw new AppError(`Client not found with id ${clientId}`, 404);
  }

  return next();
};

export default verifyClientIdMiddleware;
