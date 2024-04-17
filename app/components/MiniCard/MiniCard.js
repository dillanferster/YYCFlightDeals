import Image from "next/image";
import "./MiniCard.css";
import { MedCardButton } from "../MedCardButton";
import Link from "next/link";

export function MiniCard({ flightItem, index }) {
  const flightMini = flightItem;
  const position = index + 1;

  return (
    <Link href={`/details/${position}`}>
      <div
        id="MiniCardHolder"
        className="flex justify-center px-4 mt-4 cursor-pointer  "
      >
        <div
          id="MiniCard"
          className="flex flex-col bg-[url('/Beach.jpeg')] bg-cover bg-left justify-end  items-center ease-in-out transition-all  border-2 border-[#696565] border-solid w-[4rem] rounded-md h-28 text-white"
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
