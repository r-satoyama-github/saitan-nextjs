import { useCallback, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Text } from "../texts/Text";
import { RowContainer } from "../containers/RowContainer";
import { CountStatusContext } from "../providers/CountStatusProvider";

export const CountStatus = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const context = useContext(CountStatusContext);
  const { count, isComplete } = context;

  // timer
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
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
      {(() => {
        if (isPlaying && isComplete) {
          stop();
        }
      })()}
      <SStatusRowContainer>
        <Text>
          かうんと：<span>{count}</span>
        </Text>
        <Text>
          けいか：<span>{seconds}</span>
        </Text>
      </SStatusRowContainer>
    </>
  );
};

const SStatusRowContainer = styled(RowContainer)`
  justify-content: space-evenly;
  height: 50px;
  align-items: center;
`;
