import { styled } from "../../styles/stitches.config";

export const CardsWrapper = styled("ul", {
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 0.5fr))",
  padding: "2rem",
  gap: "2rem",
  width: "100%",
  height: "100%",
  justifyItems: "center",

  ["& li"]: {
    backgroundColor: "$color4",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    width: "250px",
    height: "200px",
    justifyContent: "space-around",
    borderRadius: "1rem",

    "&:hover": {
      backgroundColor: "$color8",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
      transition: "all 0.2s ease-in-out",
    },
  },
});

export const CardDataWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
});

export const ButtonsWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  // padding: "1rem",
  justifyContent: "space-around",
  width: "100%",
  paddingBottom: "20px",
});

export const DeleteButton = styled("button", {
  backgroundColor: "$color1",
  borderRadius: "10px",
  padding: "0.5rem",
});
export const UpdateButton = styled("button", {
  backgroundColor: "$color1",
  borderRadius: "10px",
  padding: "0.5rem",
});
