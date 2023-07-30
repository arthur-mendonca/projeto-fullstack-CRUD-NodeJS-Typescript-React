import { useContext, useEffect } from "react";
import { ContactsContext } from "../../../contexts/contactsContext";
import { ButtonsWrapper, DeleteModalWrapper, StyledButton } from "./style";
import { ClientsContext } from "../../../contexts/clientsContext/clientsContext";
import { IClientContext } from "../../../contexts/clientsContext/interfaces";
import { Text } from "../../../styles/Text";
import jwt_decode from "jwt-decode";

interface DecodedToken {
  sub: string;
}

export const DeleteContactModal = () => {
  const { deleteContact, setCurrentModal, contactId } =
    useContext(ContactsContext);

  const { specificClient, getSpecificClient } =
    useContext<IClientContext>(ClientsContext);

  const token = localStorage.getItem("@token");
  const decoded = jwt_decode<DecodedToken>(token!);

  useEffect(() => {
    getSpecificClient(Number(decoded.sub));
  }, []);

  const contactToDelete = specificClient!.contacts.find(
    (contact) => Number(contact.id) === Number(contactId)
  );

  const handleClick = () => {
    deleteContact(Number(contactId));
    setCurrentModal("");
  };
  return (
    <DeleteModalWrapper>
      <Text>
        Tem certeza que deseja excluir o contato{" "}
        <strong>
          <p>{contactToDelete?.name}</p>
        </strong>
      </Text>
      <ButtonsWrapper>
        <StyledButton onClick={() => handleClick()}>Sim</StyledButton>
        <StyledButton onClick={() => setCurrentModal("")}>Não</StyledButton>
      </ButtonsWrapper>
    </DeleteModalWrapper>
  );
};