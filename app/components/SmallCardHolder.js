import { MiniCard } from "./MiniCard/MiniCard";
import { MiniCardLoading } from "./miniCardLoading";

import { useState, useEffect } from "react";

export function SmallCardHolder({ flightData }) {
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    if (flightData && flightData.length > 0) {
      console.log("data in small card holder");
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
          return <MiniCard key={index} flightItem={flightItem} index={index} />;
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
