"use client";
import { CheapFlights } from "./components/CheapFlights";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { WhyNotGo } from "./components/WhyNotGo";
import { MiddleGreen } from "./components/MiddleGreen";
import { Nav } from "./components/Nav";
import { TopGreen } from "./components/TopGreen";
import { SmallCardHolder } from "./components/SmallCardHolder";
import { Grid } from "./components/GridCube/Grid";
import DetailCard from "./components/DetailCard";
import { fetchData } from "./components/fetchData";
import { useState, useEffect } from "react";

export default function Home() {
  const [flightData, setFlightData] = useState([]);

  async function getFlights() {
    const flights = await fetchData();

    // Assuming flights.data is an object like the one you've described
    const flightsArray = Object.values(flights.data);

    setFlightData(flightsArray);

    // // // Now you can access the first flight object
    // const foundFlight = flightsArray[0];

    // console.log(foundFlight.price);
  }

  useEffect(() => {
    getFlights();
  }, []);

  return (
    <main className=" flex-col  items-center justify-center ">
      <div className="flex justify-center gap-8 px-2">
        <TopGreen firstWord="WHERE" secondWord="IS" />
        <TopGreen firstWord="THE" secondWord="NEXT" />
      </div>
      <MiddleGreen />
      <CheapFlights />
      <MainContainer flightData={flightData} />
      <WhyNotGo />
      <SmallCardHolder flightData={flightData} />

      <Grid flightData={flightData} />
    </main>
  );
}
