import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ColumnContainer } from "@/components/containers/ColumnContainer";
import Header from "@/components/layouts/Header";
import { CountStatusContext } from "@/components/providers/CountStatusProvider";
import { GameContext } from "@/components/providers/GameProvider";
import { Heading1 } from "@/components/texts/Heading1";
import { Heading2 } from "@/components/texts/Heading2";
import { Text } from "@/components/texts/Text";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { styled } from "styled-components";
import { Ranker } from "./Ranker";
import { CompleteContext } from "@/components/providers/CompleteProvider";
import useAuth from "@/hooks/useAuth";

export const Result = () => {
  // GameContext
  const gameContext = useContext(GameContext);
  const { user } = gameContext;

  // CountStatusContext
  const countStatusContext = useContext(CountStatusContext);
  const { count, seconds } = countStatusContext;

  // CompleteContext
  const completeContext = useContext(CompleteContext);
  const { setIsComplete, setIsPlaying } = completeContext;

  const { session, profileFromGithub } = useAuth();
  const { nickName, avatarUrl } = profileFromGithub;

  console.log("CountStatusContext", countStatusContext);
  console.log("GameContext", gameContext);

  const router = useRouter();

  const onClickFinish = () => {
    router.replace("/");
  };
  return (
    <>
      <SColumnContainer>
        <Text>{nickName}</Text>
        <Heading1 style={{}}>けっか</Heading1>
        <MyResultColumnContainer>
          <Text>かうんと:{count}</Text>
          <Text>
            けいか:
            {(() => {
              const result2 = new Date(seconds * 1000)
                .toISOString()
                .slice(14, 19);
              return result2;
            })()}
          </Text>
        </MyResultColumnContainer>

        <RankingColumnContainer>
          <Heading2>らんきんぐ</Heading2>
          <ColumnContainer>
            <Ranker>ゲスト1さん　２回　10:00</Ranker>
            <Ranker>ゲスト2さん　２回　11:00</Ranker>
            <Ranker>ゲスト3さん　３回　10:00</Ranker>
          </ColumnContainer>
        </RankingColumnContainer>

        <ButtonColumnContainer>
          <PrimaryButton>りとらい</PrimaryButton>
          <PrimaryButton onClick={onClickFinish}>しゅうりょう</PrimaryButton>
        </ButtonColumnContainer>
      </SColumnContainer>
    </>
  );
};

const SColumnContainer = styled(ColumnContainer)`
  height: 90vh;
`;

const MyResultColumnContainer = styled(ColumnContainer)`
  height: 20%;
`;

const RankingColumnContainer = styled(ColumnContainer)`
  height: 40%;
`;
const ButtonColumnContainer = styled(ColumnContainer)`
  justify-content: space-evenly;
  height: 20%;
`;
