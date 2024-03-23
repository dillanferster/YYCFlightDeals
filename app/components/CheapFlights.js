import Image from "next/image";
import Arrows from "../assets/Arrows.svg";

export function CheapFlights() {
  return (
    <div className="flex mt-32 justify-evenly px-4 mx-auto w-[62rem] mb-6">
      <div className="text-8xl text-zinc-950">CHEAP FLIGHTS</div>
      <div className="flex gap-5 justify-between py-2.5">
        <Image src={Arrows} alt="arrows" />
        <Image src={Arrows} alt="arrows" />
      </div>
    </div>
  );
}
