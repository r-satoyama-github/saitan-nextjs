"use client";

import Header from "@/components/layouts/Header";
import { CountStatusProvider } from "@/components/providers/CountStatusProvider";
import { Content } from "./content";

export default function Page() {
  return (
    <>
      <CountStatusProvider>
        <Header />
        <Content />
      </CountStatusProvider>
    </>
  );
}
