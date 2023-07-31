import { ClientsContext } from "../../contexts/clientsContext/clientsContext";
import {
  DashboardNavBar,
  StyledContainer,
  StyledTitle,
  StyledButton as ExitButton,
  StyledButton as AddContactButton,
  StyledButton as PDFButton,
  ButtonsWrapper,
  StyledTitleContainer,
} from "./style";
import { BiExit } from "react-icons/Bi";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { AiOutlineUserAdd, AiOutlineFilePdf } from "react-icons/ai";
import { ContactsContext } from "../../contexts/contactsContext";

interface DecodedToken {
  sub: string;
}

export const DashboardNavBarWrapper = () => {
  const navigate = useNavigate();
  const { getSpecificClient, specificClient } = useContext(ClientsContext);
  const { setCurrentModal } = useContext(ContactsContext);

  const token = localStorage.getItem("@token");
  const decoded = jwt_decode<DecodedToken>(token!);

  useEffect(() => {
    getSpecificClient(decoded.sub);
  }, [token, decoded.sub]);

  const exit = () => {
    localStorage.removeItem("@token");
    navigate("/");
  };

  return (
    <DashboardNavBar>
      <StyledContainer>
        <StyledTitleContainer>
          <StyledTitle>
            {"Olá, "}
            {specificClient?.name}
          </StyledTitle>
        </StyledTitleContainer>
        <ButtonsWrapper>
          <ExitButton onClick={() => exit()}>
            <BiExit color="white" />
          </ExitButton>
          <AddContactButton onClick={() => setCurrentModal("addNewContact")}>
            <AiOutlineUserAdd color="white" />
          </AddContactButton>
          <PDFButton onClick={() => setCurrentModal("PDFModal")}>
            <AiOutlineFilePdf color="white" />
          </PDFButton>
        </ButtonsWrapper>
      </StyledContainer>
    </DashboardNavBar>
  );
};
