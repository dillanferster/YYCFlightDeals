import { MiniCard } from "./MiniCard/MiniCard";
import { MiniCardLoading } from "./miniCardLoading";

import { useState, useEffect } from "react";

export function SmallCardHolder({ flightData }) {
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    if (flightData && flightData.length > 0) {
      setFlight(flightData);
    } else {
      console.log("Flight data is not available yet.");
    }
  }, [flightData]);

  const filteredFlight = flight
    ? flight.filter((_, index) => index >= 1 && index <= 5)
    : [];

  return (
    <div className="mt-16 flex justify-evenly max-w-[62rem] mx-auto">
      {flight ? (
        filteredFlight.map((flightItem, index) => {
          return (
            <div
              key={index}
              className={index === 0 || index === 4 ? "max-sm:hidden" : ""}
            >
              <MiniCard flightItem={flightItem} index={index} />
            </div>
          );
        })
      ) : (
        <div className="mt-16 flex justify-evenly max-w-[62rem] mx-auto">
          <MiniCardLoading />
          <MiniCardLoading />
          <MiniCardLoading />
          <MiniCardLoading />
          <MiniCardLoading />
        </div>
      )}
    </div>
  );
}
