import { useContext } from "react";
import { DashboardNavBarWrapper } from "../../components/DashboardNavBar";
import { ModalComponent } from "../../components/Modal/ModalComponent";
import { Cards } from "../../components/cards";
import { DashboardWrapper } from "./style";
import { ContactsContext } from "../../contexts/contactsContext";
import { AddNewContactModal } from "../../components/Modal/addNewContactModal";

export const Dashboard = () => {
  const { currentModal } = useContext(ContactsContext);

  return (
    <DashboardWrapper>
      {currentModal && (
        <ModalComponent>
          {currentModal === "addNewContact" && <AddNewContactModal />}
        </ModalComponent>
      )}
      <DashboardNavBarWrapper />
      <Cards />
    </DashboardWrapper>
  );
};
