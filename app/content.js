import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ColumnContainer } from "@/components/containers/ColumnContainer";
import { GameContext } from "@/components/providers/GameProvider";
import { Heading1 } from "@/components/texts/Heading1";
import { useRouter } from "next/router";
import { useContext } from "react";
import { styled } from "styled-components";

export const Content = () => {
  const context = useContext(GameContext);
  const { user, setUser } = context;
  const router = useRouter();
  const onClickPrimary = () => {
    setUser("TEST USER");
    router.push("/game");
  };
  return (
    <>
      <SColumnContainer>
        <Heading1 style={{}}>SAITAN</Heading1>
        <PrimaryButton onClick={onClickPrimary}>Start</PrimaryButton>
      </SColumnContainer>
    </>
  );
};

const SColumnContainer = styled(ColumnContainer)`
  justify-content: space-evenly;
  height: 100vh;
`;
