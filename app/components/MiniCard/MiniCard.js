import Image from "next/image";
import "./MiniCard.css";
import { MedCardButton } from "../MedCardButton";
import Link from "next/link";

export function MiniCard() {
  return (
    <Link href="pages/details">
      <div
        id="MiniCardHolder"
        className="flex justify-center px-4 mt-4 cursor-pointer "
      >
        <div
          id="MiniCard"
          className="flex flex-col bg-[url('/Beach.jpeg')] bg-cover bg-left justify-end  items-center transition-all  border-2 border-[#696565] border-solid w-[4rem] rounded-[40px] h-28 text-white"
        >
          <div id="MiniCardFlight">YYC</div>
          <div id="MiniCardInfo">
            <MedCardButton />
          </div>
        </div>
      </div>
    </Link>
  );
}
