import { ClientsContext } from "../../contexts/clientsContext/clientsContext";
import { IClientContext } from "../../contexts/clientsContext/interfaces";
import { Text } from "../../styles/Text";
import {
  ButtonsWrapper,
  CardDataWrapper,
  CardsWrapper,
  DeleteButton,
  UpdateButton,
} from "./style";
import { MouseEvent, useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { ContactsContext } from "../../contexts/contactsContext";
import { AiOutlineDelete } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";

interface DecodedToken {
  sub: string;
}

export const Cards = (): JSX.Element => {
  const { getSpecificClient, specificClient } =
    useContext<IClientContext>(ClientsContext);

  const { setCurrentModal, setContactId } = useContext(ContactsContext);

  const token = localStorage.getItem("@token");
  const decoded = jwt_decode<DecodedToken>(token!);

  useEffect(() => {
    getSpecificClient(decoded.sub);
  }, []);

  const handleUpdateClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentModal("updateContact");
    console.log(event.currentTarget.id);
    setContactId(event.currentTarget.id);
  };

  const handleDeleteClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentModal("deleteContact");
    console.log(event.currentTarget.id);
    setContactId(event.currentTarget.id);
  };

  return (
    <CardsWrapper>
      {specificClient?.contacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((contact) => (
          <li key={contact.id} id={contact.id}>
            <CardDataWrapper>
              <Text type={"cardName"} css={{ color: "white" }}>
                {contact.name}
              </Text>
              <Text type={"cardText"} css={{ color: "white" }}>
                {contact.email}
              </Text>
              <Text type={"cardText"} css={{ color: "white" }}>
                {contact.phone}{" "}
              </Text>
            </CardDataWrapper>
            <ButtonsWrapper>
              <DeleteButton
                id={contact.id}
                onClick={(event) => handleDeleteClick(event)}
              >
                <AiOutlineDelete color={"white"} />
              </DeleteButton>
              <UpdateButton
                id={contact.id}
                onClick={(event) => handleUpdateClick(event)}
              >
                <MdSystemUpdateAlt color={"white"} />
              </UpdateButton>
            </ButtonsWrapper>
          </li>
        ))}
    </CardsWrapper>
  );
};
