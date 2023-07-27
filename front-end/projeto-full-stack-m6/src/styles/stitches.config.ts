import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  media: {
    mobile: "(max-width: 768px)",
  },
  utils: {
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});
