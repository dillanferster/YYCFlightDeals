"use client";
import { MainContainerButton } from "./MainContainerButton";
import "./MainContainer.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";

export function MainContainer({ flightData }) {
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    if (flightData && flightData.length > 0) {
      console.log("data in main Container");
      setFlight(flightData[0]);
    } else {
      console.log("Flight data is not available yet.");
    }
  }, [flightData]);

  return (
    <div
      id="MainC"
      className="flex justify-center px-4 mt-4 max-w-[62rem]  mx-auto"
    >
      <Link href={`/pages/details?data=${JSON.stringify(flight)}`}>
        <div className="flex bg-[url('/Beach.jpeg')] bg-cover  bg-left justify-end items-end border-2 border-[#696565] border-solid  w-[62rem] rounded-2xl h-48 hover:translate-y-[2px] drop-shadow-[_1px_8px_rgba(217,217,217,1)] ease-in-out transition-all hover:drop-shadow-[_1px_6px_rgba(217,217,217,1)] overflow-hidden cursor-pointer [&>*]:hover:backdrop-blur-sm ">
          <MainContainerButton flightData={flightData}></MainContainerButton>
        </div>
      </Link>
    </div>
  );
}
