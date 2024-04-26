import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <div className="flex justify-center mb-4 ">
      <div>
        Designed and Built by{" "}
        <Link
          className="underline text-blue-500 hover:text-blue-400"
          href="https://www.dillanferster.com/"
          target="blank"
        >
          Dillan Ferster
        </Link>{" "}
        <div className="flex justify-center mb-2 ">
          YYC Flight Deals &#169; 2024
        </div>
        <div className="flex justify-center text-xs ">
          Photos provided by {" - "}
          <Link
            href="https://www.pexels.com/"
            target="blank"
            className="underline text-xs"
          >
            Pexels
          </Link>
        </div>
      </div>
    </div>
  );
}
