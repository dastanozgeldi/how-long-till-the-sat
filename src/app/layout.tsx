import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import Image from "next/image";

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://how-long-till-the-sat.vercel.app"),
  title: "how long till the sat?",
  description: "Be conscious of the upcoming SAT.",
  openGraph: {
    title: "how long till the sat?",
    description: "Be conscious of the upcoming SAT.",
    url: "https://how-long-till-the-sat.vercel.app",
    siteName: "how long till the sat?",
    locale: "en_US",
    type: "website",
    images: ["https://how-long-till-the-sat.vercel.app/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "how long till the sat?",
    card: "summary_large_image",
    creator: "@dastanozgeldi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={pressStart2P.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="relative">
        <Image
          className="absolute z-0 object-cover object-center opacity-60 w-full h-full"
          src="/background.jpeg"
          alt="..."
          width={1920}
          height={1080}
        />
        <main className="left-1/2 w-full z-10">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
