import Image from "next/image";
import dot from "../assets/dot.svg";

export function MiddleGreen() {
  return (
    <div className="flex items-center justify-evenly mt-4 px-4">
      <div className="flex justify-between self-center  align-middle  w-[62rem] h-[2rem] text-l px-4    mx-auto rounded-full text-zinc-950 ">
        <div className="flex  items-center ">
          <Image src={dot} alt="star" className="w-14" />
        </div>
        <div className="flex flex-col justify-center pl-4">ADVENTURE</div>
        <div className="flex items-center justify-end">
          <Image src={dot} alt="star" className="w-14" />
        </div>
      </div>
    </div>
  );
}
