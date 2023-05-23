import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ColumnContainer } from "@/components/containers/ColumnContainer";
import Header from "@/components/layouts/Header";
import { Order } from "@/components/lists/Order";
import { CountStatusContext } from "@/components/providers/CountStatusProvider";
import { GameContext } from "@/components/providers/GameProvider";
import { CountStatus } from "@/components/status/CountStatus";
import { Heading2 } from "@/components/texts/Heading2";
import { Text } from "@/components/texts/Text";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export const Content = () => {
  const countStatusContext = useContext(CountStatusContext);
  const gameContext = useContext(GameContext);
  const { isComplete, count, setCount } = countStatusContext;
  const { user } = gameContext;
  const userItems = [
    { id: 2, color: "rgba(30, 190, 62,0.5)" },
    { id: 1, color: "rgba(117, 201, 68,0.5)" },
    { id: 3, color: "rgba(22, 3, 123,0.5)" },
    { id: 4, color: "rgba(187, 200, 121,0.5)" },
    { id: 5, color: "rgba(192, 19, 112,0.5)" },
  ];
  const router = useRouter();

  const onClickResult = () => {
    router.push("/result");
  };

  return (
    <>
      <Header text={user} />
      <ColumnContainer>
        <div style={{ marginTop: "80px" }}></div>
        <Heading2>1から順にSAITANでならべよう</Heading2>
        <CountStatus />
        <Order orderItems={userItems} />
        {isComplete && (
          <ColumnContainer>
            <Text>Complete!</Text>
            <PrimaryButton onClick={onClickResult}>To Result</PrimaryButton>
          </ColumnContainer>
        )}
      </ColumnContainer>
    </>
  );
};
