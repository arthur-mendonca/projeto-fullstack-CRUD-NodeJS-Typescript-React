import { styled } from "../../styles/stitches.config";
import { Container as BaseContainer } from "../../styles/Global";

export const HomeWrapper = styled("section", {
  backgroundColor: "$whiteFixed",
});

export const HomeContainer = styled(BaseContainer, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  backgroundColor: "$color9",
  flexDirection: "column",
});
