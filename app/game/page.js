"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ColumnContainer } from "@/components/containers/ColumnContainer";
import { RowContainer } from "@/components/containers/RowContainer";
import { Order } from "@/components/lists/Order";
import { Heading2 } from "@/components/texts/Heading2";
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { styled } from "styled-components";
import { Text } from "@/components/texts/Text";

export default function Page() {
  const [isComplete, setIsComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // count
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };

  // timer
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      if (isPlaying && isComplete) {
        stop();
      }
      setSeconds((s) => s + 1);
    }, 1000);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    setIsPlaying(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  return (
    <>
      {console.log("Rendered")}
      <ColumnContainer>
        <div style={{ marginTop: "80px" }}></div>
        <Heading2>1から順にSAITANでならべよう</Heading2>
        <SStatusRowContainer>
          <Text>
            かうんと：<span>{count}</span>
          </Text>
          <Text>
            けいか：<span>{seconds}</span>
          </Text>
        </SStatusRowContainer>
        <Order countUp={countUp} setIsComplete={setIsComplete} />
        {(() => {
          if (isPlaying && isComplete) {
            stop();
          }
        })()}
        {isComplete && <Text>Complete!</Text>}
      </ColumnContainer>
    </>
  );
}

const SStatusRowContainer = styled(RowContainer)`
  justify-content: space-evenly;
  height: 50px;
  align-items: center;
`;
