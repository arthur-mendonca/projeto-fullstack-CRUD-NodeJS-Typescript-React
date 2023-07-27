import { Dispatch, SetStateAction } from "react";

export interface IClientContext {
  getClients: () => Promise<Client[] | undefined>;
  setClients: Dispatch<SetStateAction<Client[]>>;
  clients: Client[];
}

export interface IClientContextProvider {
  children: React.ReactNode;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  created_at: string;
}
