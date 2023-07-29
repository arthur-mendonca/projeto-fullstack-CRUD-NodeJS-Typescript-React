import { styled } from "../../../styles/stitches.config";

export const ModalContainer = styled("div", {
  position: "fixed",
  zIndex: 1000,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});
