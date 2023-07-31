import { useContext } from "react";
import { ContactsContext } from "../../../contexts/contactsContext";
import {
  ButtonsWrapper,
  PrintPDFWrapper,
  StyledButton,
  StyledTitle,
} from "./style";

// "PDFModal"

export const PDFModal = () => {
  const { setCurrentModal, printPDF } = useContext(ContactsContext);

  return (
    <PrintPDFWrapper>
      <StyledTitle type={"heading1"}>Imprimir lista dos contatos?</StyledTitle>
      <ButtonsWrapper>
        <StyledButton onClick={() => printPDF()}>Sim</StyledButton>
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
