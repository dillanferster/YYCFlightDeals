import React from "react";
import { NavButton } from "./NavButton";
import Link from "next/link";

export function Nav() {
  return (
    <div className=" px-2 sticky top-2 z-[1000] ">
      <div className="sticky top-2 backdrop-blur-lg z-[1000] flex flex-col py-2 mt-2  max-w-[1025px] mx-auto border-2 border-solid border-black bg-[rgba(217,217,217,.2)] align-middle rounded-sm max-sm:w-[22rem]">
        <div className="flex gap-5 justify-between items-center ">
          <div className="text-xl pl-4 text-zinc-950 max-sm:text-lg">
            YYC FLIGHT DEALS
          </div>
          <div className="flex gap-2.5 pr-4 justify-between items-center">
            <Link href="/">
              <NavButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
