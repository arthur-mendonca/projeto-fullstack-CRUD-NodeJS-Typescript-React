import { Dispatch, SetStateAction } from "react";
import { TClientRegister } from "../../interfaces/clientRegister.interfaces";

export interface IClientContext {
  getClients: () => Promise<Client[] | undefined>;
  setClients: Dispatch<SetStateAction<Client[]>>;
  clients: Client[];
  createClient: (clientData: TClientRegister) => Promise<Client | undefined>;
  getSpecificClient: (clientId: number) => Promise<Client | undefined>;
  specificClient: Client | undefined;
  setSpecificClient: React.Dispatch<React.SetStateAction<Client | undefined>>;
}

export interface IClientContextProvider {
  children: React.ReactNode;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  admin: boolean;
  created_at: string;
  contacts: Contact[];
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  created_at: string;
}
