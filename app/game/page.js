"use client";

import { PlayField } from "./PlayField";
import { useContext, useState } from "react";
import { CompleteContext } from "@/components/providers/CompleteProvider";
import { Result } from "./Result";

export default function Page() {
  console.log("Game Page Rendering");
  const completeContext = useContext(CompleteContext);
  const { isComplete, isPlaying } = completeContext;

  console.log("Page IsComplete", isComplete);
  console.log("Page IsPlaying", isPlaying);
  return <>{isComplete && !isPlaying ? <Result /> : <PlayField />}</>;
}
