import { styled } from "../../../styles/stitches.config";
import { Button as RegisterButton } from "../../../styles/Buttons";

export const StyledRegisterForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$color8",
  borderRadius: "5px",
  padding: "2rem",
  maxWidth: "25rem",
  margin: "0 auto",
});

export const StyledInput = styled("input", {
  padding: "0.5em",
  borderRadius: "4px",
  border: "1px solid #ddd",
  fontSize: "1em",
  width: "100%",
});

export const StyledPasswordWrapper = styled("div", {
  display: "flex",
  position: "relative",
});

export const StyledPasswordButton = styled("button", {
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  border: "none",
  cursor: "pointer",
});

export const StyledRegisterButton = styled(RegisterButton, {
  backgroundColor: "$color1",
  borderRadius: "5px",
  border: "none",
  color: "$whiteFixed",
  maxWidth: "125px",
  marginTop: "1rem",

  "&:hover": {
    color: "$whiteFixed",
    backgroundColor: "$color2",
    transition: "ease-in .3s",
  },
});
