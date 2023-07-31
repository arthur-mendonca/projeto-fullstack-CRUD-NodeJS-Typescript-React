import { styled } from "../../../styles/stitches.config";

export const FormWrapper = styled("form", {
  backgroundColor: "$color7",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  gap: "1.5rem",
  borderRadius: "0.5rem",
});

export const InputWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const StyledInput = styled("input", {
  padding: "0.5rem",
  fontSize: "20px",
  borderRadius: "10px",

  "@mobile": {},
});

export const ButtonWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const StyledButton = styled("button", {
  padding: "0.5rem",
  borderRadius: "10px",
  fontSize: "20px",
  cursor: "pointer",
  backgroundColor: "$color1",
  color: "$whiteFixed",

  "&:hover": {
    backgroundColor: "$color2",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    transition: "all 0.2s ease-in-out",
  },
});
