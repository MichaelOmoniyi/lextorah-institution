import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lextorah - AI-Powered Learning Support",
    template: "%s | Lextorah",
  },
  description:
    "Lextorah AI provides personalized learning support through Ms. Lexi®, our AI tutor. Empowering students with responsible, effective educational technology.",
  keywords: [
    "AI tutor",
    "learning support",
    "education",
    "Ms Lexi",
    "Lextorah",
    "academic support",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
