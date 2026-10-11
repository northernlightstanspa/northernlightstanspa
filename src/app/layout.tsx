import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Bellefair } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Northern Lights Tan Spa | Premium Tanning & Wellness",
  description: "Welcome to Northern Lights Tan Spa - Your destination for UV tanning, UV-free options, red light therapy, halotherapy, and premium tanning lotions.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${bellefair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
