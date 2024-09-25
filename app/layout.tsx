import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pro-Inspect Ltd",
  description: `At Pro-Inspect Limited, we are a dynamic and innovative company dedicated to
                revolutionizing the way businesses manage their assets. With an unwavering
                commitment to service excellence and a fresh perspective on solutions, we are your
                trusted partner in ensuring the safety, reliability, and efficiency of your business
                operations.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
