import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <div className="flex justify-center mb-4">
      <div>
        Designed and Built by{" "}
        <Link
          className="underline text-blue-500"
          href="https://www.dillanferster.com/"
          target="blank"
        >
          Dillan Ferster
        </Link>{" "}
        <div className="flex justify-center">YYC Flight Deals &#169; 2024</div>
      </div>
    </div>
  );
}
