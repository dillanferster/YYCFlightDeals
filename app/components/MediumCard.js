import Image from "next/image";
import { MedCardButton } from "./MedCardButton";
import Link from "next/link";

export function MediumCard() {
  return (
    <Link href="pages/details">
      <div className="flex justify-center px-4 mt-4 cursor-pointer">
        <div className="flex bg-[url('/Beach.jpeg')] bg-cover bg-left justify-end items-end border-2 border-slate-600 border-solid w-[14rem] rounded-xl h-28 ">
          <MedCardButton />
        </div>
      </div>
    </Link>
  );
}
