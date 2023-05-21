import styled from "styled-components";
import { RowContainer } from "../containers/RowContainer";
import { Text } from "../texts/Text";

export default function Header() {
  return (
    <SHeader>
      <SRowContainer>
        <Text>ゲストさん</Text>
      </SRowContainer>
    </SHeader>
  );
}
const SHeader = styled.header`
  left: 0;
  z-index: 400;
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--yellow-50);
  height: 50px;
`;

const SRowContainer = styled(RowContainer)`
  justify-content: right;
`;
