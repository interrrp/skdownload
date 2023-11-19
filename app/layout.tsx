import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";

import "@/app/globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SKdownload",
  description: "⛏️ A direct link to SKlauncher downloads",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} h-screen`}>{children}</body>
    </html>
  );
}
