import { Contact } from "../clientsContext/interfaces";

export interface IContactsContext {
  addNewContact: (
    contactData: ContactRequestData,
    clientId: number
  ) => Promise<Contact | undefined>;
  currentModal: string;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
}

export interface IContextContextProvider {
  children: React.ReactNode;
}

export interface ContactResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  created_at: string;
}

export interface ContactRequestData {
  name: string;
  email: string;
  phone: string;
}
