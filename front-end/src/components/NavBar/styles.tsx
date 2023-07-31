import { keyframes } from "@stitches/react";
import { styled } from "../../styles/stitches.config";
import { Text } from "../../styles/Text";

export const NavBar = styled("nav", {
  background: "$color7",
  position: "sticky",
  inset: 0,
  bottom: "auto",
  width: "100%",
  zIndex: "999",
  display: "flex",
  gap: "1rem",
});

export const MarqueeText = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translateX(300%)" },
});

export const AnimatedText = styled(Text, {
  display: "flex",
  animation: `${MarqueeText} 10s linear infinite`,
  whiteSpace: "nowrap",
  color: "$whiteFixed",
});
