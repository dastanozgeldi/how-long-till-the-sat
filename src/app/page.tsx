"use client";

import Image from "next/image";
import sunLogo from "./assets/sun.png";

export default function Home() {
  const calculatePercentage = () => {
    const currentDate = new Date();

    const firstDayOfSummer = new Date("June 1, 2023 00:00:00");
    const lastDayOfSummer = new Date("August 31, 2023 23:59:59");

    const diffFirst = currentDate.getTime() - firstDayOfSummer.getTime();
    const diffLast = lastDayOfSummer.getTime() - firstDayOfSummer.getTime();

    const gone = (diffFirst / diffLast) * 100;
    return gone.toFixed(2);
  };

  return (
    <div className="max-w-[1280px] mx-auto p-[2rem] text-center">
      <Image
        src={sunLogo}
        className="mx-auto my-6 w-[6em] h-[6em] hover:drop-shadow-[0_0_2em_#61dafbaa] hover:duration-300 cursor-pointer animate-[spin_20s_ease-in-out_infinite]"
        alt="Sun logo"
      />
      <h1 className="leading-[2.5] font-bold text-[3.2em]">
        {calculatePercentage()}%
      </h1>
      <h2 className="text-[1.4em] font-bold leading-[2]">of summer is gone.</h2>
      <div className="my-3">
        <a
          className="text-[#888]"
          href="https://www.youtube.com/watch?v=YucXxma_-ko"
        >
          🔗 How To Stop Wasting Your Life
        </a>
      </div>
    </div>
  );
}
