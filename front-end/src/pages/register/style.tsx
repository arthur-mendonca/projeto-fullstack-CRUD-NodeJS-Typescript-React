import { styled } from "../../styles/stitches.config";
import { Text } from "../../styles/Text";

export const RegisterPageWrapper = styled("section", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background:
    "linear-gradient(180deg,    #560BAD,    #3F37C9,   #4361EE,   #4895EF,   #4CC9F0)",
});

export const StyledTitle = styled(Text, {
  color: "$whiteFixed",
});
