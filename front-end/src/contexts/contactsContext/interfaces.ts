import { Contact } from "../clientsContext/interfaces";

export interface IContactsContext {
  addNewContact: (
    contactData: ContactRequestData,
    clientId: number
  ) => Promise<Contact | undefined>;

  currentModal: string;

  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;

  updateContact: (
    contactData: ContactUpdate,
    contactId: number
  ) => Promise<Contact | undefined>;
  setContactId: React.Dispatch<React.SetStateAction<string | undefined>>;

  contactId: string | undefined;

  deleteContact: (contactId: number) => Promise<void>;
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

export interface ContactUpdate {
  name?: string;
  email?: string;
  phone?: string;
}
