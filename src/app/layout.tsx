import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import Image from "next/image";

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://how-much-summer-is-gone.vercel.app"),
  title: "n% Summer Is Gone",
  description: "Be conscious of your summer holidays with a percentage stat.",
  openGraph: {
    title: "n% Summer Is Gone",
    description: "Be conscious of your summer holidays with a percentage stat.",
    url: "https://how-much-summer-is-gone.vercel.app",
    siteName: "n% Summer Is Gone",
    locale: "en_US",
    type: "website",
    images: ["https://how-much-summer-is-gone.vercel.app/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "n% Summer Is Gone",
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
