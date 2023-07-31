import { useContext } from "react";
import { ContactsContext } from "../../../contexts/contactsContext";
import {
  ButtonsWrapper,
  PrintPDFWrapper,
  StyledButton,
  StyledTitle,
} from "./style";

export const PDFModal = () => {
  const { setCurrentModal, printPDF } = useContext(ContactsContext);

  const handleClick = () => {
    printPDF();
    setCurrentModal("");
  };

  return (
    <PrintPDFWrapper>
      <StyledTitle type={"heading1"}>Imprimir lista dos contatos?</StyledTitle>
      <ButtonsWrapper>
        <StyledButton onClick={() => handleClick()}>Sim</StyledButton>
        <StyledButton
          onClick={() => {
            setCurrentModal("");
          }}
        >
          Não
        </StyledButton>
      </ButtonsWrapper>
    </PrintPDFWrapper>
  );
};
