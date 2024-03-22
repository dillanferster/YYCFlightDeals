import Image from "next/image";
import "./MiniCard.css";
import { MedCardButton } from "../MedCardButton";

export function MiniCard() {
  return (
    <div
      id="MiniCardHolder"
      className="flex justify-center px-4 mt-4 cursor-pointer "
    >
      <div
        id="MiniCard"
        className="flex flex-col bg-[url('/Beach.jpeg')] bg-cover bg-left justify-end  items-center transition-all  border-2 border-slate-600 border-solid w-[4rem] rounded-[40px] h-28 text-white"
      >
        <div id="MiniCardFlight">YYC</div>
        <div id="MiniCardInfo">
          <MedCardButton />
        </div>
      </div>
    </div>
  );
}
