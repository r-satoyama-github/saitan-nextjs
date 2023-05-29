import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ColumnContainer } from "@/components/containers/ColumnContainer";
import Header from "@/components/layouts/Header";
import { CountStatusContext } from "@/components/providers/CountStatusProvider";
import { GameContext } from "@/components/providers/GameProvider";
import { Heading1 } from "@/components/texts/Heading1";
import { Text } from "@/components/texts/Text";
import { useRouter } from "next/router";
import { useContext } from "react";
import { styled } from "styled-components";

export const Result = () => {
  // GameContext
  const gameContext = useContext(GameContext);
  const { user } = gameContext;

  // CountStatusContext
  const countStatusContext = useContext(CountStatusContext);
  const { count, seconds } = countStatusContext;

  console.log("CountStatusContext", countStatusContext);
  console.log("GameContext", gameContext);

  return (
    <>
      <Header text={user} />
      <SColumnContainer>
        <Heading1 style={{}}>RESULT</Heading1>
        <Text>User:{user}</Text>
        <Text>Count:{count}</Text>
        <Text>
          Seconds:
          {(() => {
            const result2 = new Date(seconds * 1000)
              .toISOString()
              .slice(14, 19);
            return result2;
          })()}
        </Text>
      </SColumnContainer>
    </>
  );
};

const SColumnContainer = styled(ColumnContainer)`
  justify-content: space-evenly;
  height: 100vh;
`;
