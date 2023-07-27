import { createClientService } from "../services/clients/createClient.service";
import { Request, Response } from "express";
import listAllClientsService from "../services/clients/listAllClients.service";
import updateClientService from "../services/clients/updateClient.service";
import getClientByIdService from "../services/clients/getClientById.service";
import deleteClientService from "../services/clients/deleteClient.service";
import { listClientsPDFService } from "../services/clients/listClientsPDF.service";
import path from "path";
import ejs from "ejs";

const createClientController = async (request: Request, response: Response) => {
  const newClient = await createClientService(request.body);
  return response.status(201).json(newClient);
};

const listAllClientsController = async (
  request: Request,
  response: Response
) => {
  return response.status(200).json(await listAllClientsService());
};

const updateClientController = async (request: Request, response: Response) => {
  let clientId = Number(request.params.id);

  return response
    .status(200)
    .json(await updateClientService(clientId, request.body));
};

const getClientByIdController = async (
  request: Request,
  response: Response
) => {
  let clientId = Number(request.params.id);
  return response.status(200).json(await getClientByIdService(clientId));
};

const deleteClientController = async (request: Request, response: Response) => {
  let clientId = request.params.id;
  return response.status(200).json(await deleteClientService(Number(clientId)));
};

const listClientsPDFController = async (
  request: Request,
  response: Response
) => {
  const clients = await listClientsPDFService();

  const filePath = path.join(__dirname, "../services/clients/clients.ejs");

  const createPDF = ejs.renderFile(filePath, { clients }, (err, html) => {
    if (err) {
      console.log(err);
    } else {
      console.log("PDF gerado com sucesso");
    }
    return response.send(html);
  });

  return response.status(200).json(createPDF);
};
export {
  createClientController,
  listAllClientsController,
  updateClientController,
  getClientByIdController,
  deleteClientController,
  listClientsPDFController,
};
