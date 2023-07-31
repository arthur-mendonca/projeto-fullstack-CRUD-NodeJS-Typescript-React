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
  const { setSpecificClient } = useContext(ClientsContext);
  const [currentModal, setCurrentModal] = useState("");
  const [contactId, setContactId] = useState<string | undefined>(undefined);

  const token = localStorage.getItem("@token");

  const addNewContact = async (
    contactData: ContactRequestData,
    clientId: string
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
        contacts: [...prevState!.contacts, response.data],
      }));

      setCurrentModal("");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (
    contactData: ContactUpdate,
    contactId: string
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
        contacts: [
          ...prevState!.contacts.map((contact) =>
            contact.id === contactId ? response.data : contact
          ),
        ],
      }));

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (contactId: string): Promise<void> => {
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

  const printPDF = async (): Promise<void> => {
    try {
      const response = await api.get("/contacts/pdf", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      });

      const file = new Blob([response.data], { type: "application/pdf" });

      const link = document.createElement("a");
      link.style.display = "none";
      document.body.appendChild(link);

      const url = window.URL.createObjectURL(file);

      link.href = url;
      link.download = "contacts.pdf";
      link.click();
      window.URL.revokeObjectURL(url);

      return response.data;
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
        printPDF,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
