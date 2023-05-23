"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ColumnContainer } from "@/components/containers/ColumnContainer";
import { RowContainer } from "@/components/containers/RowContainer";
import { Order } from "@/components/lists/Order";
import { Heading2 } from "@/components/texts/Heading2";
import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { styled } from "styled-components";
import { Text } from "@/components/texts/Text";
import Header from "@/components/layouts/Header";
import { CountStatus } from "@/components/status/CountStatus";
import {
  CountStatusContext,
  CountStatusProvider,
} from "@/components/providers/CountStatusProvider";
import { Heading1 } from "@/components/texts/Heading1";

export default function Page() {
  const context = useContext(CountStatusContext);
  const { isComplete } = context;
  console.log("Context", context);
  const userItems = [
    { id: 2, color: "rgba(30, 190, 62,0.5)" },
    { id: 1, color: "rgba(117, 201, 68,0.5)" },
    { id: 3, color: "rgba(22, 3, 123,0.5)" },
    { id: 4, color: "rgba(187, 200, 121,0.5)" },
    { id: 5, color: "rgba(192, 18, 112,0.5)" },
  ];

  return (
    <>
      <CountStatusProvider>
        <Header />
        <ColumnContainer>
          <div style={{ marginTop: "80px" }}></div>
          <Heading2>1から順にSAITANでならべよう</Heading2>
          <CountStatus />
          <Order orderItems={userItems} />
        </ColumnContainer>
      </CountStatusProvider>
    </>
  );
}
