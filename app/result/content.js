import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ColumnContainer } from "@/components/containers/ColumnContainer";
import { CountStatusContext } from "@/components/providers/CountStatusProvider";
import { GameContext } from "@/components/providers/GameProvider";
import { Heading1 } from "@/components/texts/Heading1";
import { Text } from "@/components/texts/Text";
import { useRouter } from "next/router";
import { useContext } from "react";
import { styled } from "styled-components";

export const Content = () => {
  const gameContext = useContext(GameContext);
  const countStatusContext = useContext(CountStatusContext);
  const { user, setUser } = gameContext;
  const { count, seconds } = countStatusContext;
  console.log("CountStatusContext", countStatusContext);
  console.log("GameContext", gameContext);

  return (
    <>
      <SColumnContainer>
        <Heading1 style={{}}>RESULT</Heading1>
        <Text>User:{user}</Text>
        <Text>Count:{count}</Text>
        <Text>Seconds:{seconds}</Text>
      </SColumnContainer>
    </>
  );
};

const SColumnContainer = styled(ColumnContainer)`
  justify-content: space-evenly;
  height: 100vh;
`;
