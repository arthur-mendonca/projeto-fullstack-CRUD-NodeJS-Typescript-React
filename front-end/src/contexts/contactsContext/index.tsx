import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services";
import {
  ContactRequestData,
  IContactsContext,
  IContextContextProvider,
} from "./interfaces";
import { Contact } from "../clientsContext/interfaces";
import { ClientsContext } from "../clientsContext/clientsContext";

export const ContactsContext = createContext({} as IContactsContext);

export const ContactsProvider: React.FC<IContextContextProvider> = ({
  children,
}) => {
  const { specificClient, setSpecificClient } = useContext(ClientsContext);
  const [currentModal, setCurrentModal] = useState("");

  const token = localStorage.getItem("@token");

  const addNewContact = async (
    contactData: ContactRequestData,
    clientId: number
  ): Promise<Contact | undefined> => {
    try {
      const response = await api.post(`/contacts/${clientId}`, contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast("Contact added successfully");
      if (specificClient && specificClient.id === clientId) {
        setSpecificClient((prevState) => ({
          ...prevState!,
          contacts: [...prevState!.contacts, response.data],
        }));
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContactsContext.Provider
      value={{ addNewContact, currentModal, setCurrentModal }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
