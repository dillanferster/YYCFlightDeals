import React from "react";
import { GridCube } from "./GridCube";
import { MiddleGridCube } from "../MiddleGridCube";
import { useState, useEffect } from "react";

export function Grid({ flightData }) {
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    if (flightData && flightData.length > 0) {
      console.log("data in small card holder");
      setFlight(flightData);
    } else {
      console.log("Flight data is not available yet.");
    }
  }, [flightData]);

  return (
    <div className="flex flex-wrap  max-w-[64.5rem] mx-auto mt-32 mb-16 translate-x-1.4">
      <div className="flex flex-col">
        <div className="translate-x-1 translate-y-1">
          <GridCube flight={flight} />
        </div>
        <div className="translate-x-1 translate-y-0.5">
          <GridCube flight={flight} />
        </div>
        <div className="translate-x-1 ">
          <GridCube flight={flight} />
        </div>
      </div>
      <div className="flex flex-col  ">
        <div className="translate-x-0.5 translate-y-1">
          <GridCube flight={flight} />
        </div>
        <div className="translate-x-0.5 translate-y-0.5">
          <MiddleGridCube />
        </div>
        <div className="translate-x-0.5">
          <GridCube flight={flight} />
        </div>
      </div>
      <div className="flex flex-col ">
        <div className=" translate-y-1">
          <GridCube flight={flight} />
        </div>
        <div className="translate-y-0.5">
          <GridCube flight={flight} />
        </div>
        <div className="">
          <GridCube flight={flight} />
        </div>
      </div>
    </div>
  );
}
