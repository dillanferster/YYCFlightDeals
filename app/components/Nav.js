import React from "react";
import { NavButton } from "./NavButton";
import Link from "next/link";

export function Nav() {
  return (
    <div className="sticky top-2 backdrop-blur-sm z-[1000] flex flex-col py-2 mt-2  max-w-[1024px] mx-auto border-2 border-solid border-black bg-[rgba(217,217,217,.2)] align-middle rounded-sm">
      <div className="flex gap-5 justify-between items-center ">
        <div className="text-xl pl-4 text-zinc-950">YYC FLIGHT DEALS</div>
        <div className="flex gap-2.5 pr-4 justify-between items-center">
          <Link href="/">
            <NavButton />
          </Link>
        </div>
      </div>
      {/* <hr className="mt-2 h-0.5 border-black  max-w-[1024px]" /> */}
    </div>
  );
}
