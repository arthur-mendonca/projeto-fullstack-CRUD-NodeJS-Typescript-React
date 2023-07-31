import { Clock } from "../clock";
import { AnimatedText, NavBar as NavBarWrapper } from "./styles";

export const NavBar = (): JSX.Element => {
  return (
    <NavBarWrapper>
      <AnimatedText type={"body2"}>
        <Clock />
      </AnimatedText>
    </NavBarWrapper>
  );
};
