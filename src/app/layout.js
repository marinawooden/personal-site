import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import localFont from 'next/font/local';
import Navbar from "@/components/NavBar/NavBar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"]
})

export const metadata = {
  title: 'Marina Wooden',
  description: 'The personal webpage of Marina Wooden',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="fonts/fonts.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
