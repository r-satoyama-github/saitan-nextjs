"use client";
import styled from "styled-components";
import { ColumnContainer } from "../../components/containers/ColumnContainer";
import { RowContainer } from "../../components/containers/RowContainer";
import { memo, useContext, useEffect, useMemo, useState } from "react";
import { Text } from "@/components/texts/Text";
import Image from "next/image";
import { CountStatusContext } from "../../components/providers/CountStatusProvider";
import { CompleteContext } from "../../components/providers/CompleteProvider";

export const Order = (props) => {
  console.log("Order Rendering");
  const { items, setItems } = props;
  // console.log("Order Rendering UserItems", orderItems);

  // リストに表示するアイテム

  console.log("Order Rendering Items", items);

  // CountStatusContext
  const countStatusContext = useContext(CountStatusContext);
  const { count, setCount, itemHistories, setItemHistories, start, stop } =
    countStatusContext;

  // CompleteContext
  const completeContext = useContext(CompleteContext);
  const { setIsComplete } = completeContext;

  const CheckOrderAndCountUp = () => {
    // 並び替えカウントアップ
    setCount(count + 1);

    // 整列しているかどうかのチェック
    if (IsOrdered(items.length, items)) {
      stop();
      setIsComplete(true);
    }

    // 並び替え履歴に追加
    console.log("Count Change", itemHistories);
    itemHistories.push([...items]);
    setItemHistories([...itemHistories]);

    // 表示するリストに再セット
    setItems([...items]);
  };

  // 上と並び替える
  const onClickUp = (number, index) => {
    if (index != 0) {
      items.splice(index - 1, 2, items[index], items[index - 1]);
    }
    // 並びのチェックとカウントアップ
    CheckOrderAndCountUp();
  };

  // 下と並び替える
  const onClickDown = (number, index) => {
    if (index != items.length - 1) {
      items.splice(index, 2, items[index + 1], items[index]);
    }
    // 並びのチェックとカウントアップ
    CheckOrderAndCountUp(items);
  };

  // return useMemo(() => {
  return (
    <>
      <ColumnContainer id="list">
        {console.log("Order List", items)}
        {console.log("Order List", itemHistories)}
        {items.map((item, index) => {
          return (
            <SItemRowContainer
              key={item.id}
              style={{ backgroundColor: item.color }}
            >
              <Image
                src="/triangle.svg"
                onClick={() => onClickDown(item, index)}
                width={30}
                height={30}
                style={{ rotate: "180deg" }}
                alt="DOWN"
              />
              <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                {item.id}
              </Text>
              <Image
                src="/triangle.svg"
                onClick={() => onClickUp(item, index)}
                width={30}
                height={30}
                alt="UP"
              />
            </SItemRowContainer>
          );
        })}
      </ColumnContainer>
    </>
  );
  // }, [orderItems]);
};

// 並びのチェック
const IsOrdered = (until, items) => {
  for (let i = 0; i < until; i++) {
    if (items[i].id != i + 1) {
      return false;
    }
  }
  return true;
};

const SItemRowContainer = styled(RowContainer)`
  background-color: var(--yellow-50);
  justify-content: space-around;
  height: 50px;
  align-items: center;
  width: 90%;
  margin-top: 10px;
  border-radius: 10px;
`;
