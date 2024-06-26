import Image from "next/image";
import Globe from "../assets/globe.svg";

export function MiddleGridCube() {
  return (
    <div className="border-2 border-black w-[21.42rem] h-[19rem] rounded-sm  flex flex-col justify-evenly items-center transition-all overflow-hidden bg-[--color-bg] text-slate-900">
      <div className="text-sm">YOU CAN TAKE ONE MORE DAY OFF ITS FINE</div>
      <div>
        <Image src={Globe} alt="globe" />
      </div>
      <div className="text-2xl">YOU DESERVE IT</div>
    </div>
  );
}
