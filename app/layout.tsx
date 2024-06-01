import type { Metadata } from "next";
import { Azeret_Mono } from "next/font/google";
import "./globals.css";
const azeretMono = Azeret_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mad4Pest",
  description: "Mad4Pest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${azeretMono.className}`}>{children}</body>
    </html>
  );
}
