"use client";
import { CompleteProvider } from "@/components/providers/CompleteProvider";
import { CountStatusProvider } from "@/components/providers/CountStatusProvider";
import { GameProvider } from "@/components/providers/GameProvider";
export function RootProviders({ children }) {
  return (
    <GameProvider>
      <CompleteProvider>
        <CountStatusProvider>{children}</CountStatusProvider>
      </CompleteProvider>
    </GameProvider>
  );
}
