import { useState, useEffect } from "react";
import "./MainContainer.css";

export function MainContainerButton({ flightData }) {
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    if (flightData && flightData.length > 0) {
      console.log("data in button");
      setFlight(flightData[0]);
    } else {
      console.log("Flight data is not available yet.");
    }
  }, [flightData]);

  return (
    <div
      id="MainCB"
      className=" flex w-[63rem] p-2 justify-end  pr-12 pb-3 gap-2 max-sm:pr-9"
    >
      <div className="flex justify-center items-center h-[2rem] border-white border-2 rounded-full w-[16rem] text-white">
        YYC &rarr; {flight ? flight.destination : ""} | From $
        {flight ? flight.price : ""}
      </div>

      <button
        id="MainContainerBtn"
        className="h-[2rem] border-white border-2 rounded-full w-[4rem] text-[var(--color-green)] text-xl hover:border-[var(--color-green)] "
      >
        &rarr;
      </button>
    </div>
  );
}
