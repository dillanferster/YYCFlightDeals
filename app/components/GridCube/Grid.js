import React from "react";
import { GridCube } from "./GridCube";
import { MiddleGridCube } from "../MiddleGridCube";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Grid({ flightData, cityCode }) {
  const [flightGrid, setFlightGrid] = useState([]);
  

  let gridOne;
  let gridTwo;
  let gridThree;
  let gridFour;
  let gridFive;
  let gridSix;
  let gridSeven;
  let gridEight;

  useEffect(() => {
    if (flightData && flightData.length > 0 && cityCode) {
      setFlightGrid(flightData);
    } else {
      console.log("Flight data is not available yet.");
    }
  }, [flightData]);

  // adding city property to each flight object 
  if (flightGrid) {
    const updatedGrid = flightGrid.map((flight, index) => {
      const updatedFlight = { ...flight };
      updatedFlight.city = cityCode[flight.destination];
      return updatedFlight;
    });

    // takes the updated grid array at index 6-14 and makes it a variable 
    [gridOne, gridTwo, gridThree, gridFour, gridFive, gridSix, gridSeven, gridEight] = updatedGrid.slice(6, 14);
  }

  return (
    <div className="flex flex-wrap justify-center items-center -translate-x-0.5  mt-32 mb-10  max-xl:justify-center bg-[#E7E6FB] h-[70rem] max-md:h-[120rem]">
      <div className="flex flex-col ">
        <Link href={`/details/6`}>
          <div className="translate-x-1 translate-y-1 ">
            <GridCube flight={gridOne} />
          </div>
        </Link>
        <Link href={`/details/7`}>
          <div className="translate-x-1 translate-y-0.5">
            <GridCube flight={gridTwo} />
          </div>
        </Link>
        <Link href={`/details/8`}>
          {" "}
          <div className="translate-x-1 ">
            <GridCube flight={gridThree} />
          </div>
        </Link>
      </div>
      <div className="flex flex-col max-xl:hidden ">
        <Link href={`/details/9`}>
          {" "}
          <div className="translate-x-0.5 translate-y-1">
            <GridCube flight={gridFour} />
          </div>
        </Link>

        <div className="translate-x-0.5 translate-y-0.5 ">
          <MiddleGridCube />
        </div>
        <Link href={`/details/10`}>
          <div className="translate-x-0.5">
            <GridCube flight={gridFive} />
          </div>
        </Link>
      </div>
      <div className="flex flex-col ">
        <Link href={`/details/11`}>
          <div className=" translate-y-1">
            <GridCube flight={gridSix} />
          </div>
        </Link>
        <Link href={`/details/12`}>
          <div className="translate-y-0.5">
            <GridCube flight={gridSeven} />
          </div>
        </Link>
        <Link href={`/details/13`}>
          <div className="">
            <GridCube flight={gridEight} />
          </div>
        </Link>
      </div>
    </div>
  );
}
