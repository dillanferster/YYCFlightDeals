import Image from "next/image";
import AstarL from "../assets/AstarL.svg";
import AstarR from "../assets/AstarR.svg";

export function MiddleGreen() {
  return (
    <div className="flex items-center justify-evenly mt-4 px-4">
      <div className="flex justify-between self-center  align-middle  w-[62rem] h-[2rem] text-l px-4  bg-[var(--color-green)] border-[.1rem] border-black mx-auto rounded-full text-zinc-950 ">
        <div className="flex  items-center ">
          <Image src={AstarL} alt="star" className="w-14" />
        </div>
        <div className="flex flex-col justify-center">ADVENTURE</div>
        <div className="flex items-center justify-end">
          <Image src={AstarR} alt="star" className="w-14" />
        </div>
      </div>
    </div>
  );
}
