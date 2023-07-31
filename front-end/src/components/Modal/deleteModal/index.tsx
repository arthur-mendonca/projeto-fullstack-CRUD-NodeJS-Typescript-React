import { useContext, useEffect } from "react";
import { ContactsContext } from "../../../contexts/contactsContext";
import {
  ButtonsWrapper,
  DeleteModalWrapper,
  StyledButton,
  StyledDeleteButton,
  StyledText,
} from "./style";
import { ClientsContext } from "../../../contexts/clientsContext/clientsContext";
import { IClientContext } from "../../../contexts/clientsContext/interfaces";
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
    getSpecificClient(decoded.sub);
  }, []);

  const contactToDelete = specificClient!.contacts.find(
    (contact) => contact.id === contactId
  );

  const handleClick = () => {
    deleteContact(contactId!);
    setCurrentModal("");
  };
  return (
    <DeleteModalWrapper>
      <StyledText>
        Tem certeza que deseja excluir o contato{" "}
        <strong>
          <p>{contactToDelete?.name} ?</p>
        </strong>
      </StyledText>
      <ButtonsWrapper>
        <StyledButton onClick={() => handleClick()}>Sim</StyledButton>
        <StyledDeleteButton onClick={() => setCurrentModal("")}>
          Não
        </StyledDeleteButton>
      </ButtonsWrapper>
    </DeleteModalWrapper>
  );
};
