import { ClientsContext } from "../../contexts/clientsContext/clientsContext";
import { IClientContext } from "../../contexts/clientsContext/interfaces";
import { Text } from "../../styles/Text";
import { CardsWrapper } from "./style";
import { useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";

interface DecodedToken {
  sub: string;
}

export const Cards = (): JSX.Element => {
  const { getSpecificClient, specificClient } =
    useContext<IClientContext>(ClientsContext);

  const token = localStorage.getItem("@token");
  const decoded = jwt_decode<DecodedToken>(token!);

  useEffect(() => {
    getSpecificClient(Number(decoded.sub));
  }, []);

  return (
    <CardsWrapper>
      {specificClient?.contacts.map((contact) => (
        <li key={contact.id}>
          <Text type={"cardName"} css={{ color: "$color8" }}>
            {contact.name}
          </Text>
          <Text type={"cardText"}> {contact.email}</Text>
          <Text type={"cardText"}> {contact.phone} </Text>
        </li>
      ))}
    </CardsWrapper>
  );
};
