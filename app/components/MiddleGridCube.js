import React from "react";
import Image from "next/image";
import Globe from "../assets/globe.svg";

export function MiddleGridCube() {
  return (
    <div className="border-2 border-black w-[21.42rem] h-[19rem] rounded-sm  bg-transparent flex flex-col justify-evenly items-center transition-all overflow-hidden  ">
      <div className="text-sm">YOU CAN TAKE ONE MORE DAY OFF IT'S FINE</div>
      <div>
        <Image src={Globe} alt="globe" />
      </div>
      <div className="text-2xl">YOU DESERVE IT</div>
    </div>
  );
}
