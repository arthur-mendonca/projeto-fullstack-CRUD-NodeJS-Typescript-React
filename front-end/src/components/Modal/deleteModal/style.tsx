import { styled } from "../../../styles/stitches.config";
import { Text } from "../../../styles/Text";
import { Button } from "../../../styles/Buttons";

export const DeleteModalWrapper = styled("div", {
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
  padding: "0.3rem",
  backgroundColor: "$color1",
  color: "$whiteFixed",
  borderRadius: "0.5rem",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$color2",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    transition: "all 0.2s ease-in-out",
  },
});

export const StyledDeleteButton = styled(StyledButton, {
  backgroundColor: "$whiteFixed",
  color: "Black",
  "&:hover": {
    backgroundColor: "lightgray",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    transition: "all 0.2s ease-in-out",
  },
});

export const StyledText = styled(Text, {
  color: "$whiteFixed",
  textAlign: "center",
});
