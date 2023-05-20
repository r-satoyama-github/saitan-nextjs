import styled from "styled-components";

export function Heading1(props) {
  const { children, style } = props;
  return (
    <>
      <SH1 style={style}>{children}</SH1>
    </>
  );
}

const SH1 = styled.h1`
  font-size: var(--heading1);
`;
