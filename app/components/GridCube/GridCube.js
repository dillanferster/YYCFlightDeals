import React from "react";
import { MainContainerButton } from "../MainContainer/MainContainerButton";
import "./GridCube.css";
import Link from "next/link";

export function GridCube({ flight, index, bg }) {
  const gridFlight = flight ? flight : "";

  const backGround = bg;

  return (
    <Link href={`/details/${index}`}>
      <div
        style={{
          backgroundImage: backGround,
          backgroundSize: "cover", // or 'contain'
          backgroundPosition: "center",
        }}
        id="gridCube"
        className="border-2 border-black w-[21.42rem] h-[19rem] rounded-sm bg-cover bg-bottom flex flex-col justify-end [&>*]:hover:backdrop-blur-sm ease-in-out  transition-all overflow-hidden cursor-pointer "
      >
        <div className=" h-20 flex justify-between ease-in-out  transition-all ">
          <div className="flex flex-col justify-evenly pl-4">
            <div className="flex">
              <div className="font-bold text-2xl text-white">
                {gridFlight.city}
              </div>
            </div>

            <div className="font-medium text-white">{`Tickets from $${gridFlight.price}`}</div>
          </div>
          <div
            id="gridBtn"
            className="px-4 flex flex-col justify-center invisible"
          >
            <button
              id="MainContainerBtn"
              className="h-[2rem] border-white border-2 rounded-full w-[4rem] text-[var(--color-green)] text-xl hover:border-[var(--color-green)]  transition-all "
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
