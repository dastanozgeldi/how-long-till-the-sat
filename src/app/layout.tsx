import "./globals.css";
import { Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";

const pressStart2P = Press_Start_2P({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "n% Summer Is Gone",
  description: "Be conscious of your summer holidays with a percentage stat.",
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
