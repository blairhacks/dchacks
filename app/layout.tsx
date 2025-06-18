import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "DCHacks",
  description: "High School Hackathon in DC Metro Area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased " + inter.className}
        suppressHydrationWarning
      >
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
