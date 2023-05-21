import styled from "styled-components";

export function Text(props) {
  const { children, style } = props;
  return (
    <>
      <SP style={style}>{children}</SP>
    </>
  );
}

const SP = styled.p`
  font-size: var(--body-mobile);
  @media (min-width: 768px) {
    font-size: var(--body);
  }
`;
