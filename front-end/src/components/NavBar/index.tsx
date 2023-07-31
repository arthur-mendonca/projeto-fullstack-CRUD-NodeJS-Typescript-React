import { Clock } from "../clock";
import { AnimatedTextDiv, NavBar as NavBarWrapper } from "./styles";

export const NavBar = (): JSX.Element => {
  return (
    <NavBarWrapper>
      <AnimatedTextDiv>
        <Clock />
      </AnimatedTextDiv>
    </NavBarWrapper>
  );
};
