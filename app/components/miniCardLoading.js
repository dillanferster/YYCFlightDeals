import Image from "next/image";
import "./MiniCard/MiniCard.css";

export function MiniCardLoading() {
  return (
    <div
      id="MiniCardHolder"
      className="flex justify-center px-4 mt-4 cursor-pointer  "
    >
      <div
        id="MiniCard"
        className="flex flex-col bg-[url('/Beach.jpeg')] bg-cover bg-left justify-end  items-center ease-in-out transition-all  border-2 border-[#696565] border-solid w-[4rem] rounded-xl h-28 text-white"
      >
        <div id="MiniCardFlight"></div>
        <div id="MiniCardInfo"></div>
      </div>
    </div>
  );
}
