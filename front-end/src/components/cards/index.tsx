import { ClientsContext } from "../../contexts/clientsContext/clientsContext";
import { IClientContext } from "../../contexts/clientsContext/interfaces";
import { Text } from "../../styles/Text";
import { CardsWrapper } from "./style";
import { useContext, useEffect } from "react";

export const Cards = (): JSX.Element => {
  const { getClients, clients } = useContext<IClientContext>(ClientsContext);

  useEffect(() => {
    getClients();
  }, []);

  return (
    <CardsWrapper>
      {clients?.map((client) => (
        <li key={client.id}>
          <Text type={"heading1"} css={{ color: "$color8" }}>
            {client.name}
          </Text>
          <Text> {client.email}</Text>
          <Text> {client.phone}</Text>
        </li>
      ))}
    </CardsWrapper>
  );
};
