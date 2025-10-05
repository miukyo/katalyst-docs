import "@/styles/globals.css";
import "@fontsource-variable/space-grotesk";
import type { ReactNode } from "react";
import { Provider } from "@/components/provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Provider>
      <title>Katalyst - A simple & small but powerful ui framework for Roblox</title>
      <meta name="description" content="A simple & small but powerful ui framework for Roblox" />
      <link rel="icon" href="/katalyst-fire.png" />
      <img src="/kat-bg.png" className="fixed flex top-0 left-[50vw] -translate-x-1/2 min-w-[1200px] pointer-events-none -z-10 brightness-200 dark:brightness-100" />
      {children}
    </Provider>
  );
}
