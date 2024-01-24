import type { Metadata } from "next";
import { Tilt_Neon } from "next/font/google";
import "./globals.css";

const tiltNeon = Tilt_Neon({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sol Price Tracker",
  description: "Check the price of Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tiltNeon.className}>{children}</body>
    </html>
  );
}
