import { Repository } from "typeorm";
import { TLoginRequest } from "../../interfaces/login.interface";
import { Client } from "../../entities/clients.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

const createTokenService = async ({ email, password }: TLoginRequest) => {
  const clientRepo: Repository<Client> = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOne({ where: { email } });

  if (!client) {
    throw new AppError("Invalid credentials", 403);
  }

  const passwordMatch = await compare(password, client.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = jwt.sign(
    {
      userName: client.name,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1H",
      subject: client.id.toString(),
    }
  );
  return token;
};

export { createTokenService };
