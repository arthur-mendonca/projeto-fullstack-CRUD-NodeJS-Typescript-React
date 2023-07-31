import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { Contact } from "../entities/contacts.entity";

const verifyContactIdMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  let contactId = request.params.id;

  const clientRepo: Repository<Contact> = AppDataSource.getRepository(Contact);

  const findContact = await clientRepo.findOne({
    where: { id: contactId },
  });

  if (!findContact) {
    throw new AppError(`Contact not found with id ${contactId}`, 404);
  }

  return next();
};

export default verifyContactIdMiddleware;
