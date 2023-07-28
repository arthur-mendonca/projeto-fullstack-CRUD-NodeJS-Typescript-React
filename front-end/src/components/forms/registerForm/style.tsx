import { styled } from "../../../styles/stitches.config";

export const StyledRegisterForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "1em",
});

export const StyledInput = styled("input", {
  padding: "0.5em",
  borderRadius: "4px",
  border: "1px solid #ddd",
  fontSize: "1em",
  width: "100%",
});
