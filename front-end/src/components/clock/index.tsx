import { useState, useEffect } from "react";
import { Container, StyledText } from "./style";

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hour = time.getHours();

    if (hour < 12) {
      setGreeting("Bom dia");
    }
    if (hour < 18) {
      setGreeting("Boa tarde");
    } else {
      setGreeting("Boa noite");
    }
  }, [time]);

  return (
    <Container>
      <StyledText type={"body2"}>{greeting}</StyledText>
      <StyledText type={"body2"}>{time.toLocaleTimeString()}</StyledText>
    </Container>
  );
};
