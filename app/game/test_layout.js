"use client";
import { CountStatusProvider } from "@/components/providers/CountStatusProvider";
import { GameProvider } from "@/components/providers/GameProvider";

export const metadata = {
  title: "SAITAN-GAME",
  description: "Generated by R.S",
};

export default function GameLayout({ children }) {
  return (
    <GameProvider>
      <CountStatusProvider>{children}</CountStatusProvider>
    </GameProvider>
  );
}