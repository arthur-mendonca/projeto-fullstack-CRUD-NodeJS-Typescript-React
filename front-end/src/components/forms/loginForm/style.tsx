import { styled } from "../../../styles/stitches.config";
import { Button as LoginButton } from "../../../styles/Buttons";
import { Button as RegisterButton } from "../../../styles/Buttons";

export const StyledLoginForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  borderRadius: "5px",
  padding: "1rem",
  maxWidth: "25rem",
  margin: "0 auto",
  border: "2px solid $color10",
});

export const StyledInput = styled("input", {
  padding: "0.5em",
  borderRadius: "4px",
  border: "3px solid $whiteFixed",
  fontSize: "1em",
  width: "100%",
});

export const ButtonsWrapper = styled("div", {
  display: "flex",
  gap: "1rem",
});

export const StyledLoginButton = styled(LoginButton, {
  backgroundColor: "$color1",
  borderRadius: "5px",
  border: "none",
  color: "$whiteFixed",
  maxWidth: "125px",

  "&:hover": {
    color: "$whiteFixed",
    backgroundColor: "$color2",
    transition: "ease-in .3s",
  },
});

export const StyledRegisterButton = styled(RegisterButton, {
  backgroundColor: "$whiteFixed",
  borderRadius: "5px",
  border: "none",
  maxWidth: "125px",

  "&:hover": {
    backgroundColor: "#D3D3D3",
    transition: "ease-in .3s",
  },
});
