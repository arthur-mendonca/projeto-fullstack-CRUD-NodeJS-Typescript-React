import { Request, Response } from "express";
import { createTokenService } from "../services/login/login.service";

const createTokenController = async (request: Request, response: Response) => {
  const { email, password } = request.body;

  const token = await createTokenService({ email, password });

  return response.json(token);
};

export { createTokenController };
