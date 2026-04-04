import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Jet Society",
  description:
    "Jet Society\u00AE \u00E9 um clube seleto de propriet\u00E1rios de jatos, combinando gest\u00E3o completa, efici\u00EAncia operacional e benef\u00EDcios sob medida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
