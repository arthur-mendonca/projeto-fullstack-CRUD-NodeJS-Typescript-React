import { ClientsContext } from "../../contexts/clientsContext/clientsContext";
import { IClientContext } from "../../contexts/clientsContext/interfaces";
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
        <li key={client.id}>{client.name}</li>
      ))}
    </CardsWrapper>
  );
};
