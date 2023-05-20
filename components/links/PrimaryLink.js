import { memo } from "react";
import styled from "styled-components";
import { BaseLink } from "./BaseLink";

export const PrimaryLink = memo(function PrimaryLink(props) {
  const { children, href } = props;
  console.log("PrimaryLink Rendered");
  return (
    <>
      <SBaseLink href={href}>{children}</SBaseLink>
    </>
  );
});

const SBaseLink = styled(BaseLink)`
  background-color: var(--orange-accent);
`;
