import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "myzone - Intelligent Global Marketplace",
  description: "The next-generation B2B marketplace connecting buyers and sellers worldwide with AI-powered features.",
  keywords: ["marketplace", "B2B", "e-commerce", "global trade", "AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-[#111418] dark:text-white`}>
        <Providers>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
