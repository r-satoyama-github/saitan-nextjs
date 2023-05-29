import { CountStatusProvider } from "@/components/providers/CountStatusProvider";

export function Providers({ children }) {
  return <CountStatusProvider>{children}</CountStatusProvider>;
}
