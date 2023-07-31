import { styled } from "../../styles/stitches.config";
import { Container as BaseContainer } from "../../styles/Global";
import { Text } from "../../styles/Text";

export const HomeWrapper = styled("section", {
  background:
    "linear-gradient(180deg,    #560BAD,    #3F37C9,   #4361EE,   #4895EF,   #4CC9F0)",
});

export const HomeContainer = styled(BaseContainer, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column",
});

export const StyledTitle = styled(Text, {
  color: "$whiteFixed",
});
