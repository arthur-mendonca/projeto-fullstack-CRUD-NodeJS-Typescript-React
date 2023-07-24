import { createClientService } from "../services/createClient.service";
import { Request, Response } from "express";

const createClientController = async (request: Request, response: Response) => {
  const newClient = await createClientService(request.body);
  return response.status(201).json(newClient);
};

export { createClientController };
