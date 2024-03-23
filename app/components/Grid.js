import React from "react";
import { GridCube } from "./GridCube";

export function Grid() {
  return (
    <div className="flex flex-wrap  w-[64rem] mx-auto mt-32 mb-16 -translate-x-2">
      <div className="flex flex-col">
        <div className="">
          <GridCube />
        </div>
        <div className="">
          <GridCube />
        </div>
        <div className="">
          <GridCube />
        </div>
      </div>
      <div className="flex flex-col  ">
        <div className="">
          <GridCube />
        </div>
        <div className="">
          <GridCube />
        </div>
        <div className="">
          <GridCube />
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="">
          <GridCube />
        </div>
        <div className="">
          <GridCube />
        </div>
        <div className="">
          <GridCube />
        </div>
      </div>
    </div>
  );
}
