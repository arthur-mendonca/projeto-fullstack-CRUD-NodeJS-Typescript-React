import { styled } from "../../styles/stitches.config";
import { Text } from "../../styles/Text";
import { Container } from "../../styles/Global";
import { Button } from "../../styles/Buttons";

export const DashboardNavBar = styled("nav", {
  background: "$color8",
  position: "fixed",
  top: "28px",
  bottom: "auto",
  width: "100%",
  zIndex: "900",
});

export const StyledContainer = styled(Container, {
  padding: "1rem 0",
  display: "flex",
  justifyContent: "space-around",
});

export const StyledTitle = styled(Text, {
  color: "$whiteFixed",
  alignSelf: "center",
  display: "flex",
  justifyContent: "center",
  fontSize: "16px",
});

export const StyledButton = styled(Button, {
  background: "transparent",
  border: "none",
});

export const ButtonsWrapper = styled("div", {
  display: "flex",
});
