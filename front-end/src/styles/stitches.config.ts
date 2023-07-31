import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  media: {
    mobile: "(max-width: 899px)",
  },
  utils: {
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});
