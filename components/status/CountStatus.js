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
          かうんと：<SSpan>{count}</SSpan>
        </Text>
        <Text>
          けいか：
          <SSpan>
            {(() => {
              const result2 = new Date(seconds * 1000)
                .toISOString()
                .slice(14, 19);
              return result2;
            })()}
          </SSpan>
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

const SSpan = styled.span`
  font-size: var(--heading2);
  font-weight: bold;
`;
