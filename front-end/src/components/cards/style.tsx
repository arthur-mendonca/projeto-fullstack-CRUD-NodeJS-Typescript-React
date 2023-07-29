import { styled } from "../../styles/stitches.config";

export const CardsWrapper = styled("ul", {
  //   backgroundColor: "$color1",
  listStyle: "none",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 2fr))",
  padding: "2rem 2rem",
  gap: "2rem",
  width: "100%",
  // backgroundColor: "darkblue",

  ["& li"]: {
    backgroundColor: "White",
    padding: "1rem",
  },
});
