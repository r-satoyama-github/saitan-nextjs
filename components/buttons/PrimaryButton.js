import { memo } from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = memo(function PrimaryButton(props) {
  const { children, onClick } = props;
  console.log("PrimaryButton Rendered");
  return (
    <>
      <SButton onClick={onClick}>{children}</SButton>
    </>
  );
});

const SButton = styled(BaseButton)`
  background-color: var(--orange-accent);
`;
