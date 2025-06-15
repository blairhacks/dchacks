import "./globals.css";

import type { Metadata } from "next";

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
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
