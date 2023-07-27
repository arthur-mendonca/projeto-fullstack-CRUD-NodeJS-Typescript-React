import { styled } from "../../styles/stitches.config";
import { Container } from "../../styles/Global";

export const Footer = styled("footer", {
  backgroundColor: "$color7",
  padding: "$3",
  position: "fixed",
  bottom: 0,
  width: "100%",
  [`& ${Container}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
