"use client";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ColumnContainer } from "@/components/containers/ColumnContainer";
import Header from "@/components/layouts/Header";
import { Order } from "@/app/game/Order";
import { CountStatusContext } from "@/components/providers/CountStatusProvider";
import { GameContext } from "@/components/providers/GameProvider";
import { CountStatus } from "@/app/game/CountStatus";
import { Heading2 } from "@/components/texts/Heading2";
import { Text } from "@/components/texts/Text";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { RowContainer } from "@/components/containers/RowContainer";
import styled from "styled-components";
import { CompleteContext } from "@/components/providers/CompleteProvider";

export const PlayField = () => {
  console.log("PlayField Rendering");
  const fixItems = [
    { id: 2, color: "rgba(30, 190, 62,0.5)" },
    { id: 1, color: "rgba(117, 201, 68,0.5)" },
    { id: 3, color: "rgba(22, 3, 123,0.5)" },
    { id: 4, color: "rgba(187, 200, 121,0.5)" },
    { id: 5, color: "rgba(192, 19, 112,0.5)" },
  ];
  const [items, setItems] = useState(fixItems);

  const countStatusContext = useContext(CountStatusContext);
  const gameContext = useContext(GameContext);
  const completeContext = useContext(CompleteContext);
  const {
    count,
    seconds,
    setCount,
    itemHistories,
    setItemHistories,
    start,
    stop,
  } = countStatusContext;
  const { user } = gameContext;
  const { isComplete, setIsPlaying } = completeContext;

  // const [userItems, setUserItems] = useState(fixItems);
  const onClickResult = () => {
    console.log("Result Click", gameContext);
    setIsPlaying(false);
  };

  const onClickBack = () => {
    console.log("OnClick Back");
    if (count < 1) return;
    setCount(count - 1);
    setItems(itemHistories[count - 1]);
    setItemHistories([itemHistories.pop()]);
  };

  // リセットボタン押下処理;
  const onClickReset = () => {
    console.log("ResetButton Clicked");
    // 経過時間を00:00にする必要がある
    // stop();
    // 画面のリロード
    // router.refresh();
    if (confirm("リセットしてやり直しますか？")) {
      window.location.reload();
    }
  };

  useEffect(() => {
    // 最初の一回のみカウント開始
    start();

    // 最初の並びを履歴に追加
    console.log("First ItemHistories", itemHistories);
    itemHistories.push([...fixItems]);
    setItemHistories([...itemHistories]);
  }, []);

  // start();

  // return useMemo(() => {
  return (
    <>
      <Header text={user} />
      <ColumnContainer>
        <div style={{ marginTop: "80px" }}></div>
        <Heading2>1から順にSAITANでならべよう</Heading2>

        {/* カウント表示部 */}
        <CountStatus />

        {/* リスト表示 */}
        <Order items={items} setItems={setItems} />

        {/* 戻る、リセットボタン 並び替えが未完了の場合表示 */}
        {isComplete || (
          <SRowContainer style={{ margin: "10px 0" }}>
            <PrimaryButton onClick={onClickBack}>もどす</PrimaryButton>
            <PrimaryButton onClick={onClickReset}>りせっと</PrimaryButton>
          </SRowContainer>
        )}

        {/* 結果表示ボタン　並び替えが完了の場合表示 */}
        {isComplete && (
          <ColumnContainer>
            <Text>完了!</Text>
            <PrimaryButton onClick={onClickResult}>けっかをみる</PrimaryButton>
          </ColumnContainer>
        )}
      </ColumnContainer>
    </>
  );
  // }, [isComplete]);
};

const SRowContainer = styled(RowContainer)`
  margin: 10px 0;
  justify-content: space-evenly;
`;
