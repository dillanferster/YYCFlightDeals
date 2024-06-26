import React, { useEffect, useState } from "react";
import { MainContainerButton } from "../MainContainer/MainContainerButton";
import "./GridCube.css";

import { fetchPhotoData } from "../fetchData";
import { useWaitFor } from "../../hooks/useWaitFor";

export function GridCube({ flight }) {
  const gridFlight = flight ? flight : [];
  const [gridPhotos, setGridPhotos] = useState();

  const backGround = gridPhotos ? gridPhotos[0].src.original : "";

  // calls photo api
  async function getPhotoData() {
    if (!gridPhotos) {
      const cityPhoto = gridFlight.city;

      const photos = await fetchPhotoData(cityPhoto);
      setGridPhotos(photos);
    }
  }

  useWaitFor(gridFlight && gridFlight.city, getPhotoData);

  return (
    <div>
      {gridFlight && gridPhotos ? (
        <div
          style={{
            backgroundImage: `url(${backGround})`,
            backgroundSize: "cover", // or 'contain'
            backgroundPosition: "bottom",
          }}
          id="gridCube"
          className="border-2 border-black w-[21.42rem] h-[19rem] rounded-sm bg-cover bg-bottom flex flex-col justify-end [&>*]:hover:backdrop-blur-sm   ease-in-out [&>*]:border-black [&>*]:hover:border-t-2  overflow-hidden cursor-pointer "
        >
          <div
            id="grid-Hover-Selected"
            className=" h-24 flex justify-between ease-in-out  "
          >
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
      ) : (
        <div
          id="gridCube"
          className=" skeleton border-2 border-black w-[21.42rem] h-[19rem] rounded-sm flex flex-col justify-end  overflow-hidden cursor-pointer "
        ></div>
      )}
    </div>
  );
}
