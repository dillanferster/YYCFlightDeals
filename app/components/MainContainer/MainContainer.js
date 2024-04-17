"use client";
import { MainContainerButton } from "./MainContainerButton";
import "./MainContainer.css";
import Link from "next/link";
import { useState, useEffect } from "react";

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
      className="flex justify-center px-4 mt-4 max-w-[62rem] max-lg:w-[46rem]  mx-auto max-md:w-[38rem] max-md:mt-2 max-sm:w-[23rem] mb-5"
    >
      <Link href={`/details/0`}>
        <div className="flex bg-[url('/Beach.jpeg')] bg-cover  bg-left justify-end items-end border-2 border-[#696565] border-solid  max-w-[62rem] rounded-md h-48 hover:translate-y-[1px] drop-shadow-[_1px_6px_#757272] ease-in-out transition-all hover:drop-shadow-[_1px_5px_#9A9797] cursor-pointer [&>*]:hover:backdrop-blur-sm max-lg:w-[44rem] max-md:w-[36rem] max-sm:w-[23rem] ">
          <MainContainerButton flightData={flightData}></MainContainerButton>
        </div>
      </Link>
    </div>
  );
}
