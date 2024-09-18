import { config } from "@/app/config";
import { ImageResponse } from "next/server";

export const runtime = "edge";

const pressStart2P = fetch(
  new URL("../PressStart2P-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const fontData = await pressStart2P;

  // Fetch the background image
  const backgroundImageData = await fetch(
    "https://how-long-till-the-sat.vercel.app/background.jpeg"
  ).then((res) => res.arrayBuffer());

  const currentDate = new Date();
  const lastDay = new Date(config.SAT_DATE);

  const left =
    (lastDay.getTime() - currentDate.getTime()) / 24 / 60 / 60 / 1000;
  const percentage = left.toFixed(6);

  const [wholePart, decimalPart] = percentage.split(".");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="..."
          src={`data:image/jpeg;base64,${Buffer.from(
            backgroundImageData
          ).toString("base64")}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 120,
              fontWeight: 800,
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            <span>{wholePart}</span>
            <span style={{ fontSize: 60 }}>.{decimalPart}</span>
          </div>
          <div
            style={{
              fontSize: 48,
              color: "white",
              opacity: 0.75,
              marginTop: "32px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            days till the SAT
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Press Start 2P",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
