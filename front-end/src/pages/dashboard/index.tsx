import { DashboardNavBarWrapper } from "../../components/DashboardNavBar";
import { Cards } from "../../components/cards";
import { DashboardWrapper } from "./style";

export const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardNavBarWrapper />
      <Cards />
    </DashboardWrapper>
  );
};
