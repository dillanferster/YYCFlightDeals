import { MiniCard } from "./MiniCard/MiniCard";
import { MiniCardLoading } from "./miniCardLoading";

import { useState, useEffect } from "react";

export function SmallCardHolder({ flightData, cityCode }) {
  const [flight, setFlight] = useState([]);

  // after destructing sets the state varible with flight objects
  useEffect(() => {
    if (flightData && flightData.length > 0 && cityCode) {
      const updatedFlightData = flightData.map((flight, index) => {
        const tempFlight = { ...flight };
        tempFlight.city = cityCode[flight.destination];
        return tempFlight;
      });
      setFlight(updatedFlightData);
    } else {
      console.log("Flight data is not available yet.");
    }
  }, [flightData, cityCode]);

  // makes new array of flights with certain indexs
  const filteredFlight = flight
    ? flight.filter((_, index) => index >= 1 && index <= 5)
    : [];

  return (
    <div className="mt-16 flex justify-evenly max-w-[62rem] mx-auto  max-lg:max-w-[52rem] max-md:max-w-[32rem] max-sm:max-w-[18rem]">
      {flight && flight.length > 0 && filteredFlight[4].city ? (
        filteredFlight.map((flightItem, index) => {
          if (flightItem.city)
            return (
              <div
                key={index}
                className={
                  index === 0 || index === 4 || index === 2
                    ? "max-sm:hidden max-ms:max-w-[10rem]"
                    : ""
                }
              >
                <MiniCard flightItem={flightItem} index={index} />
              </div>
            );
        })
      ) : (
        <div className="flex justify-evenly w-[100%]  max-lg:max-w-[52rem] max-md:max-w-[32rem] max-sm:max-w-[18rem]">
          <div className=" skeleton   border-2 border-black border-solid w-[4rem] rounded-md h-28 "></div>
          <div className=" skeleton   border-2 border-black border-solid w-[4rem] rounded-md h-28 "></div>
          <div className=" skeleton   border-2 border-black border-solid w-[4rem] rounded-md h-28 "></div>
          <div className=" skeleton   border-2 border-black border-solid w-[4rem] rounded-md h-28 "></div>
          <div className=" skeleton   border-2 border-black border-solid w-[4rem] rounded-md h-28 "></div>
        </div>
      )}
    </div>
  );
}
