import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aznature - Eco-Friendly Sugar Cane Drinking Straws",
  description: "Revolutionary drinking straws made from 100% natural sugar cane. Biodegradable, eco-friendly, and perfect for your sustainable lifestyle. Shop now for the best plastic straw alternative.",
  keywords: ["eco-friendly straws", "sugar cane straws", "biodegradable straws", "sustainable straws", "plastic alternative"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
