import React from "react";
import { GridCube } from "./GridCube";
import { MiddleGridCube } from "../MiddleGridCube";
import { useState, useEffect } from "react";

export function Grid({ flightData, cityCode }) {
  const [flightGrid, setFlightGrid] = useState(null);
  const city = cityCode ? cityCode : "";

  let gridOne;
  let gridTwo;
  let gridThree;
  let gridFour;
  let gridFive;
  let gridSix;
  let gridSeven;
  let gridEight;

  useEffect(() => {
    if (flightData && flightData.length > 0) {
      setFlightGrid(flightData);
    } else {
      console.log("Flight data is not available yet.");
    }
  }, [flightData]);

  if (flightGrid) {
    gridOne = flightGrid[6];
    gridOne.city = city[gridOne.destination];

    gridTwo = flightGrid[7];
    gridTwo.city = city[gridTwo.destination];

    gridThree = flightGrid[8];
    gridThree.city = city[gridThree.destination];

    gridFour = flightGrid[9];
    gridFour.city = city[gridFour.destination];

    gridFive = flightGrid[10];
    gridFive.city = city[gridFive.destination];

    gridSix = flightGrid[11];
    gridSix.city = city[gridSix.destination];

    gridSeven = flightGrid[12];
    gridSeven.city = city[gridSeven.destination];

    gridEight = flightGrid[13];
    gridEight.city = city[gridEight.destination];

    console.log(gridSeven.city);
  }

  return (
    <div className="flex flex-wrap justify-center items-center -translate-x-0.5  mt-32 mb-16  max-xl:justify-center bg-[#E7E6FB] h-[70rem] max-md:h-[120rem]">
      <div className="flex flex-col ">
        <div className="translate-x-1 translate-y-1 ">
          <GridCube bg={`url("/Desert.png")`} flight={gridOne} index={6} />
        </div>
        <div className="translate-x-1 translate-y-0.5">
          <GridCube bg={`url("/pic1.jpeg")`} flight={gridTwo} index={7} />
        </div>
        <div className="translate-x-1 ">
          <GridCube bg={`url("/pic2.jpeg")`} flight={gridThree} index={8} />
        </div>
      </div>
      <div className="flex flex-col max-xl:hidden ">
        <div className="translate-x-0.5 translate-y-1">
          <GridCube bg={`url("/pic3.jpeg")`} flight={gridFour} index={9} />
        </div>
        <div className="translate-x-0.5 translate-y-0.5 ">
          <MiddleGridCube />
        </div>
        <div className="translate-x-0.5">
          <GridCube bg={`url("/pic4.jpeg")`} flight={gridFive} index={10} />
        </div>
      </div>
      <div className="flex flex-col ">
        <div className=" translate-y-1">
          <GridCube bg={`url("/pic5.jpeg")`} flight={gridSix} index={11} />
        </div>
        <div className="translate-y-0.5">
          <GridCube bg={`url("/pic6.jpeg")`} flight={gridSeven} index={12} />
        </div>
        <div className="">
          <GridCube bg={`url("/pic7.jpeg")`} flight={gridEight} index={13} />
        </div>
      </div>
    </div>
  );
}
