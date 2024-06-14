"use client";
import { MainContainerButton } from "./MainContainerButton";
import "./MainContainer.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useWaitFor } from "@/app/hooks/useWaitFor";
import { fetchPhotoData } from "../fetchData";

export function MainContainer({ flightData, cityCode }) {
  const [flight, setFlight] = useState(null);
  const [photo, setPhoto] = useState(null);
  const city = cityCode ? cityCode : "";

  const backGround = photo ? photo[0].src.original : "";

  useEffect(() => {
    if (flightData && flightData.length > 0) {
      console.log("data in main Container");
      setFlight(flightData[0]);
    } else {
      console.log("Flight data is not available yet.");
    }
  }, [flightData]);

  if (flight && city) {
    flight.city = city[flight.destination];
  }

  // call get photos, if there is no current photo, this is so it doesnt keep re-rendering
  async function getPhotoData() {
    if (!photo) {
      const cityPhoto = flight.city;

      const photos = await fetchPhotoData(cityPhoto);
      setPhoto(photos);
    }
  }

  useWaitFor(flight && flight.city, getPhotoData);

  return (
    <div
      id="MainC"
      className="flex justify-center px-4 mt-4 max-w-[62rem] max-lg:w-[46rem]  mx-auto max-md:w-[38rem] max-md:mt-2 max-sm:w-[22rem] mb-5 bg-transparent"
    >
      <Link href={`/details/0`}>
        {flight && photo && city ? (
          <div
            style={{
              backgroundImage: `url(${backGround})`,
              backgroundSize: "cover", // or 'contain'
              backgroundPosition: "bottom",
            }}
            className="flex  bg-cover  bg-left justify-end items-end border-2 border-black border-solid  max-w-[62rem] rounded-sm h-48 hover:translate-y-[1px] drop-shadow-[_1px_6px_#2A2929] ease-in-out transition-all hover:drop-shadow-[_1px_5px_#474545] cursor-pointer [&>*]:hover:backdrop-blur-sm max-lg:w-[44rem] max-md:w-[36rem] max-sm:w-[22rem] "
          >
            <MainContainerButton flightData={flightData}></MainContainerButton>
          </div>
        ) : (
          <div className=" skeleton flex justify-end items-end border-2 border-black border-solid  w-[62rem] rounded-md h-48 hover:translate-y-[1px] drop-shadow-[_1px_6px_#2A2929]cursor-pointer [&>*]:hover:backdrop-blur-sm max-lg:w-[44rem] max-md:w-[36rem] max-sm:w-[23rem] "></div>
        )}
      </Link>
    </div>
  );
}
