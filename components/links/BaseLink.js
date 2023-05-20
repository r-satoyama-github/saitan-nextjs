import Link from "next/link";
import styled from "styled-components";

export const BaseLink = styled(Link)`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
