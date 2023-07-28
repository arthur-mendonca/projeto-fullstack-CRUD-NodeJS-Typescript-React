import { styled } from "../../styles/stitches.config";

export const CardsWrapper = styled("ul", {
  //   backgroundColor: "$color1",
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "1rem",
  padding: "2rem 2rem",
  backgroundColor: "darkblue",

  ["& li"]: {
    backgroundColor: "White",
  },
});
