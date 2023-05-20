"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ColumnContainer } from "@/components/containers/ColumnContainer";
import { Heading1 } from "@/components/texts/Heading1";
import { styled } from "styled-components";
import { useRouter } from "next/navigation";
import { PrimaryLink } from "@/components/links/PrimaryLink";

export default function Home() {
  const router = useRouter();
  const onClickPrimary = () => {
    router.push("/game");
  };
  return (
    <SColumnContainer>
      <Heading1 style={{}}>SAITAN</Heading1>
      <PrimaryButton onClick={onClickPrimary}>Start</PrimaryButton>
      {/* <PrimaryLink href="/game">Start</PrimaryLink> */}
    </SColumnContainer>
  );
}

const SColumnContainer = styled(ColumnContainer)`
  justify-content: space-evenly;
`;
