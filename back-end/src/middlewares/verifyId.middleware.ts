import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Client } from "../entities/clients.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const verifyIdMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  let clientId = request.params.id;

  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const findClient = await clientRepo.findOne({
    where: { id: Number(clientId) },
  });

  if (!findClient) {
    throw new AppError("User not found", 404);
  }

  return next();
};

export default verifyIdMiddleware;
