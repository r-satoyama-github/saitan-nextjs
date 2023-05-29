import { useCallback, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Text } from "../../components/texts/Text";
import { RowContainer } from "../../components/containers/RowContainer";
import { CountStatusContext } from "../../components/providers/CountStatusProvider";
import { CompleteContext } from "../../components/providers/CompleteProvider";

export const CountStatus = () => {
  const countStatusContext = useContext(CountStatusContext);
  const { count, seconds } = countStatusContext;

  return (
    <>
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
