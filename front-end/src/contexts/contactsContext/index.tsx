import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services";
import {
  ContactRequestData,
  ContactUpdate,
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
  const [contactId, setContactId] = useState<string | undefined>(undefined);

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

      setSpecificClient((prevState) => ({
        ...prevState!,
        contacts: [
          ...prevState!.contacts.map((contact) =>
            contact.id.toString() === contactId ? response.data : contact
          ),
        ],
      }));

      setCurrentModal("");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (
    contactData: ContactUpdate,
    contactId: number
  ): Promise<Contact | undefined> => {
    try {
      const response = await api.patch(`/contacts/${contactId}`, contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast("Contact updated successfully");

      setSpecificClient((prevState) => ({
        ...prevState!,
        contacts: [...prevState!.contacts, response.data],
      }));

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (contactId: number): Promise<void> => {
    try {
      await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSpecificClient((prevState) => ({
        ...prevState!,
        contacts: [
          ...prevState!.contacts.filter((contact) => contact.id !== contactId),
        ],
      }));

      toast("Contact deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContactsContext.Provider
      value={{
        addNewContact,
        currentModal,
        setCurrentModal,
        updateContact,
        contactId,
        setContactId,
        deleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
