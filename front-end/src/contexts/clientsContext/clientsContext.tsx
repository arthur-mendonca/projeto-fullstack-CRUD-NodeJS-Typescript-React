import { createContext, useState } from "react";
import { api } from "../../services";
import { Client, IClientContext, IClientContextProvider } from "./interfaces";
import { TClientRegister } from "../../interfaces/clientRegister.interfaces";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface IAxiosErrorResponse {
  message: string;
}

export const ClientsContext = createContext({} as IClientContext);

export const ClientsProvider: React.FC<IClientContextProvider> = ({
  children,
}) => {
  const token = localStorage.getItem("@token");
  const navigate = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);
  const [specificClient, setSpecificClient] = useState<Client | undefined>();

  const getSpecificClient = async (
    clientId: string
  ): Promise<Client | undefined> => {
    try {
      const response = await api.get(`/clients/${clientId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setSpecificClient(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getClients = async (): Promise<Client[] | undefined> => {
    try {
      const response = await api.get("/clients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClients(response.data);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const createClient = async (
    clientData: TClientRegister
  ): Promise<Client | undefined> => {
    try {
      const response = await api.post("/clients", clientData);

      setClients((prevData) => [...prevData, response.data]);
      toast("User created successfully");
      navigate("/");
      return response.data;
    } catch (err: unknown) {
      const axiosError = err as AxiosError;
      if (axios.isAxiosError(err)) {
        if (axiosError.response && axiosError.response.status === 409) {
          const AxiosErrorResponse = axiosError.response
            .data as IAxiosErrorResponse;
          toast(AxiosErrorResponse.message);
        }
      }

      console.log(err);
    }
  };

  return (
    <ClientsContext.Provider
      value={{
        clients,
        setClients,
        getClients,
        createClient,
        getSpecificClient,
        setSpecificClient,
        specificClient,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};
