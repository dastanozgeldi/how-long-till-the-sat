"use client";

import { useEffect, useState } from "react";
import { config } from "./config";

export default function Home() {
  const [percentage, setPercentage] = useState("0");

  const calculatePercentage = () => {
    const currentDate = new Date();
    const lastDay = new Date(config.SAT_DATE);

    const left =
      (lastDay.getTime() - currentDate.getTime()) / 24 / 60 / 60 / 1000;

    setPercentage(left.toFixed(6));
  };

  useEffect(() => {
    calculatePercentage();
    const interval = setInterval(calculatePercentage, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto p-[2rem] text-center space-y-3">
      <h1 className="font-extrabold text-6xl">
        {percentage.split(".")[0]}
        <span className="mx-1 text-xl">.{percentage.split(".")[1]}</span>
      </h1>
      <h2 className="text-xl opacity-75">days till the SAT</h2>
    </div>
  );
}
