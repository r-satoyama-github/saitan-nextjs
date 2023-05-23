"use client";

import { GameProvider } from "@/components/providers/GameProvider";
import { Content } from "./content";

export default function Home() {
  return (
    <GameProvider>
      <Content />
    </GameProvider>
  );
}
