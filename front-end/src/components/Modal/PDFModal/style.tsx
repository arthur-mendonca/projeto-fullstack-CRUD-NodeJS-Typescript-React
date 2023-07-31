import { Button } from "../../../styles/Buttons";
import { styled } from "../../../styles/stitches.config";
import { Text } from "../../../styles/Text";

export const PrintPDFWrapper = styled("div", {
  backgroundColor: "$color7",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "40%",
  padding: "1rem",
  gap: "1.5rem",
  borderRadius: "0.5rem",

  "@mobile": {
    width: "60%",
  },
});

export const ButtonsWrapper = styled("div", {
  display: "flex",
  gap: "1rem",
});

export const StyledButton = styled(Button, {
  padding: "0.5rem",
  borderRadius: "10px",
  fontSize: "20px",
  cursor: "pointer",
  backgroundColor: "$color1",
  color: "$whiteFixed",
  width: "100%",

  "&:hover": {
    backgroundColor: "$color2",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    transition: "all 0.2s ease-in-out",
  },
});

export const StyledTitle = styled(Text, {
  color: "$whiteFixed",
});
