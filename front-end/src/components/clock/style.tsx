import { styled } from "../../styles/stitches.config";
import { Text } from "../../styles/Text";

export const Container = styled("div", {
  display: "flex",
  gap: "1rem",
});

export const StyledText = styled(Text, {
  color: "$whiteFixed",
});
