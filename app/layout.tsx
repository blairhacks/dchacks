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
      <head>
        <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-T54MKE337Q"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-T54MKE337Q');
          </script>
      </head>
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
