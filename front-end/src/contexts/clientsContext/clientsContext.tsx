import { createContext, useState } from "react";
import { api } from "../../services";
import { Client, IClientContext, IClientContextProvider } from "./interfaces";

export const ClientsContext = createContext({} as IClientContext);

export const ClientsProvider: React.FC<IClientContextProvider> = ({
  children,
}) => {
  const [clients, setClients] = useState<Client[]>([]);

  const getClients = async (): Promise<Client[] | undefined> => {
    try {
      const response = await api.get("/clients");
      setClients(response.data);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ClientsContext.Provider value={{ clients, setClients, getClients }}>
      {children}
    </ClientsContext.Provider>
  );
};
