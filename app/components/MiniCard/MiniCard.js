import Image from "next/image";
import "./MiniCard.css";
import { MedCardButton } from "../MedCardButton";
import Link from "next/link";
import { useState } from "react";
import { useWaitFor } from "../../hooks/useWaitFor";
import { fetchPhotoData } from "../fetchData";

export function MiniCard({ flightItem, index }) {
  const flightMini = flightItem ? flightItem : "";
  const position = index + 1;

  const [miniCardPhotos, setMiniCardPhotos] = useState();

  const backGround = miniCardPhotos ? miniCardPhotos[0].src.original : "";

  // calls photo api
  async function getPhotoData() {
    if (!miniCardPhotos) {
      const cityPhoto = flightMini.city;
      console.log("mini photo");

      const photos = await fetchPhotoData(cityPhoto);
      setMiniCardPhotos(photos);
      console.log("mini photos set");
    }
  }

  useWaitFor(flightMini && flightMini.city, getPhotoData);

  return (
    <Link href={`/details/${position}`}>
      <div
        id="MiniCardHolder"
        className="flex justify-center px-4 mt-4 cursor-pointer  "
      >
        <div
          style={{
            backgroundImage: `url(${backGround})`,
            backgroundSize: "cover", // or 'contain'
            backgroundPosition: "bottom",
          }}
          id="MiniCard"
          className="flex flex-col   justify-end  items-center ease-in-out transition-all  border-2 border-black border-solid w-[4rem] rounded-md h-28 text-white"
        >
          <div id="MiniCardFlight">{flightMini.destination}</div>
          <div id="MiniCardInfo">
            <MedCardButton flight={flightMini} />
          </div>
        </div>
      </div>
    </Link>
  );
}
