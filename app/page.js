"use client";
import { CheapFlights } from "./components/CheapFlights";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { WhyNotGo } from "./components/WhyNotGo";
import { MiddleGreen } from "./components/MiddleGreen";
import { Nav } from "./components/Nav";
import { TopGreen } from "./components/TopGreen";
import { SmallCardHolder } from "./components/SmallCardHolder";
import { Grid } from "./components/GridCube/Grid";

import { fetchData } from "./components/fetchData";
import { useState, useEffect } from "react";
import { readCSVFile } from "./readFile";

export default function Home() {
  const [flightData, setFlightData] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [city, setCity] = useState({});

  // calls flight api route
  async function getFlights() {
    const flights = await fetchData();

    // Assuming flights.data is an object like the one you've described
    const flightsArray = Object.values(flights.data);

    setFlightData(flightsArray);
  }

  // calls read csv file, then sets csvdata as array of objects
  async function fetchCsvFile() {
    try {
      const data = await readCSVFile();
      setCsvData(data);
    } catch (error) {
      console.error("Error parsing CSV data:", error);
    }
  }

  useEffect(() => {
    getFlights();
    fetchCsvFile();
  }, []);

  // waits for csvdata to be loaded then makes key value pair object city 
  useEffect(() => {
    if (csvData.length > 1) {
      const airportCodeToCity = csvData.reduce((acc, row) => {
        acc[row.code] = row.city;
        return acc;
      }, {});

      setCity(airportCodeToCity);
    }
  }, [csvData]);

 
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

      <Grid flightData={flightData} cityCode={city} />
    </main>
  );
}
