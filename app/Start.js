import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ColumnContainer } from "@/components/containers/ColumnContainer";
import { CompleteContext } from "@/components/providers/CompleteProvider";
import { GameContext } from "@/components/providers/GameProvider";
import { Heading1 } from "@/components/texts/Heading1";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { styled } from "styled-components";

export const Start = () => {
  // GameContext
  const context = useContext(GameContext);
  const { user, setUser } = context;

  // CompleteContext
  const completeContext = useContext(CompleteContext);
  const { setIsComplete, setIsPlaying } = completeContext;

  // Auth Github
  const { signInWithGithub, error, session } = useAuth();

  // Use Router
  const router = useRouter();

  const onClickPrimary = () => {
    setUser("TEST USER");
    router.push("/game");
  };

  useEffect(() => {
    setIsComplete(false);
    setIsPlaying(true);
  }, []);

  if (session) router.push("/game");

  return (
    <>
      <SColumnContainer>
        <Heading1 style={{}}>SAITAN</Heading1>
        <SButtonColumnContainer>
          <PrimaryButton onClick={onClickPrimary}>
            ゲストではじめる
          </PrimaryButton>
          <PrimaryButton onClick={signInWithGithub}>
            サインインしてから
          </PrimaryButton>
          {error && <p>{error}</p>}
        </SButtonColumnContainer>
      </SColumnContainer>
    </>
  );
};

const SColumnContainer = styled(ColumnContainer)`
  justify-content: space-evenly;
  height: 100vh;
`;

const SButtonColumnContainer = styled(ColumnContainer)`
  justify-content: space-evenly;
  height: 20%;
`;
