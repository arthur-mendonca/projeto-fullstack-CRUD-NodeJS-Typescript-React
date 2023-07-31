import { styled } from "./stitches.config";

export const Text = styled("p", {
  color: "Black",
  fontSize: "$2",
  fontWeight: 400,
  variants: {
    type: {
      heading1: {
        fontSize: "$title1",
        lineHeight: "$title1",
        fontWeight: 700,
        "@mobile": {
          fontSize: "$titleMobile",
          lineHeight: "$title1Mobile",
        },
      },
      heading2: {
        fontSize: "$title2",
        lineHeight: "$title2",
        fontWeight: 600,
      },
      heading3: {
        fontSize: "$title3",
        lineHeight: "$title3",
        fontWeight: 500,
      },
      heading4: {
        fontSize: "$title4",
        lineHeight: "$title4",
        fontWeight: 500,
      },
      body1: {
        fontSize: "$text1",
        lineHeight: "$text1",
      },
      body2: {
        fontSize: "$text2",
        lineHeight: "$text2",
      },
      error: {
        color: "$whiteFixed",
        fontSize: "15px",
        fontWeight: 300,
        lineHeight: "0.2rem",
      },
      cardName: {
        fontSize: "24px",
      },
      cardText: {
        fontSize: "17px",
      },
    },
  },
});
