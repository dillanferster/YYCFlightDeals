import React from "react";
import { NavButton } from "./NavButton";

export function Nav() {
  return (
    <div className="flex flex-col pb-4 mt-4 justify-center max-w-[1024px] mx-auto">
      <div className="flex gap-5 justify-between items-center ">
        <div className="text-xl pl-4 text-zinc-950">YYC FLIGHT DEALS</div>
        <div className="flex gap-2.5 pr-4 justify-between items-center">
          <NavButton />
          <NavButton />
        </div>
      </div>
      <hr className="mt-2 h-0.5 bg-zinc-950 max-w-[1024px]" />
    </div>
  );
}
