import React from "react";
import { GridCube } from "./GridCube";
import { MiddleGridCube } from "../MiddleGridCube";

export function Grid() {
  return (
    <div className="flex flex-wrap  max-w-[64.5rem] mx-auto mt-32 mb-16 translate-x-1.4">
      <div className="flex flex-col">
        <div className="translate-x-1 translate-y-1">
          <GridCube />
        </div>
        <div className="translate-x-1 translate-y-0.5">
          <GridCube />
        </div>
        <div className="translate-x-1 ">
          <GridCube />
        </div>
      </div>
      <div className="flex flex-col  ">
        <div className="translate-x-0.5 translate-y-1">
          <GridCube />
        </div>
        <div className="translate-x-0.5 translate-y-0.5">
          <MiddleGridCube />
        </div>
        <div className="translate-x-0.5">
          <GridCube />
        </div>
      </div>
      <div className="flex flex-col ">
        <div className=" translate-y-1">
          <GridCube />
        </div>
        <div className="translate-y-0.5">
          <GridCube />
        </div>
        <div className="">
          <GridCube />
        </div>
      </div>
    </div>
  );
}
