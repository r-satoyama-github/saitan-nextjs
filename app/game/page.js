"use client";

import { PlayField } from "./PlayField";
import { useContext, useState } from "react";
import { CompleteContext } from "@/components/providers/CompleteProvider";
import { Result } from "./Result";
import { ColumnContainer } from "@/components/containers/ColumnContainer";
import LogoutButton from "@/components/buttons/LogoutButton";
import useAuth from "@/hooks/useAuth";

export default function Page() {
  console.log("Game Page Rendering");
  const completeContext = useContext(CompleteContext);
  const { isComplete, isPlaying } = completeContext;

  const { session } = useAuth();

  console.log("Page IsComplete", isComplete);
  console.log("Page IsPlaying", isPlaying);
  return (
    <>
      <ColumnContainer>
        <div style={{ height: "5vh" }}></div>

        {session && <LogoutButton />}
        {isComplete && !isPlaying ? <Result /> : <PlayField />}
      </ColumnContainer>
    </>
  );
}
