import { useContext } from "react";
import { DashboardNavBarWrapper } from "../../components/DashboardNavBar";
import { ModalComponent } from "../../components/Modal/ModalComponent";
import { Cards } from "../../components/cards";
import { CardsWrapper, DashboardWrapper } from "./style";
import { ContactsContext } from "../../contexts/contactsContext";
import { AddNewContactModal } from "../../components/Modal/addNewContactModal";
import { UpdateContactModal } from "../../components/Modal/updateContactModal";
import { DeleteContactModal } from "../../components/Modal/deleteModal";

export const Dashboard = () => {
  const { currentModal } = useContext(ContactsContext);

  return (
    <DashboardWrapper>
      {currentModal && (
        <ModalComponent>
          {currentModal === "addNewContact" && <AddNewContactModal />}
          {currentModal === "updateContact" && <UpdateContactModal />}
          {currentModal === "deleteContact" && <DeleteContactModal />}
        </ModalComponent>
      )}
      <DashboardNavBarWrapper />
      <CardsWrapper>
        <Cards />
      </CardsWrapper>
    </DashboardWrapper>
  );
};
