"use client";

import Header from "@/components/layouts/Header";
import { CountStatusProvider } from "@/components/providers/CountStatusProvider";
import { Content } from "./content";
import { GameProvider } from "@/components/providers/GameProvider";

export default function Page() {
  return (
    <>
      <GameProvider>
        <CountStatusProvider>
          <Content />
        </CountStatusProvider>
      </GameProvider>
    </>
  );
}
