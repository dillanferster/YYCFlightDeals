"use client";
import DetailCard from "@/app/components/DetailCard";

import { useEffect, useState } from "react";

export default function Home() {
  const [foundFlight, setFoundFlight] = useState();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("flight"));

    setFoundFlight(data);
  }, []);

  if (foundFlight) {
    localStorage.removeItem("flight");
    console.log(foundFlight);
  }

  return (
    <main className="bg-[var(--color-bg)] bg-fixed flex flex-col  items-center justify-center ">
      <div>
        <DetailCard />
      </div>
    </main>
  );
}
