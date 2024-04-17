import Image from "next/image";
import Arrows from "../assets/Arrows.svg";

export function CheapFlights() {
  return (
    <div className="flex mt-32 justify-evenly px-4 mx-auto w-[62rem] mb-6 max-lg:w-[52rem] max-lg:justify-center max-lg:gap-2 max-md:w-[42rem] max-md:mb-2 max-sm:w-[25rem] ">
      <div className=" flex items-center text-8xl max-lg:text-7xl max-md:text-5xl max-sm:text-4xl  text-zinc-950">
        CHEAP FLIGHTS
      </div>
      <div className="flex gap-5 justify-between py-2.5 ">
        <Image className=" max-lg:w-8 max-md:w-6" src={Arrows} alt="arrows" />
        <Image className=" max-lg:w-8 max-md:w-6" src={Arrows} alt="arrows" />
      </div>
    </div>
  );
}
