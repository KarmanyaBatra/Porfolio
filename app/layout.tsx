import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import CustomCursor from "@/app/components/CustomCursor";
import CommandPalette from "@/app/components/CommandPalette";
import MotionProvider from "@/app/components/MotionProvider";
import ScrollProgress from "@/app/components/ScrollProgress";
import { profile } from "@/app/data/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>
          <ScrollProgress />
          <CustomCursor />
          <CommandPalette />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
