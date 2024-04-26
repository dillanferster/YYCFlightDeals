"use client";
import { CheapFlights } from "./components/CheapFlights";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { WhyNotGo } from "./components/WhyNotGo";
import { MiddleGreen } from "./components/MiddleGreen";

import { TopGreen } from "./components/TopGreen";
import { SmallCardHolder } from "./components/SmallCardHolder";
import { Grid } from "./components/GridCube/Grid";

import { fetchData, fetchCityData } from "./components/fetchData";
import { useState, useEffect } from "react";

export default function Home() {
  // flight objects from api
  const [flightData, setFlightData] = useState([]);

  // city data from api
  const [cityData, setCityData] = useState([]);

  // city is my key value pair object with code : city
  const [city, setCity] = useState({});
  ////////
  //

  // calls flight api route
  async function getFlights() {
    const flights = await fetchData();

    // makes flights.data object an array
    const flightsArray = Object.values(flights.data);

    setFlightData(flightsArray);
  }

  // calls fetch city data api and returns object with city and code
  async function getCityData() {
    const citys = await fetchCityData();

    setCityData(citys);
  }

  useEffect(() => {
    getFlights();
    getCityData();
  }, []);

  // waits for cityData to be loaded then makes key value pair object code : city
  useEffect(() => {
    if (cityData.length > 1) {
      const airportCodeToCity = cityData.reduce((acc, item) => {
        acc[item.code] = item.name_translations.en;
        return acc;
      }, {});

      setCity(airportCodeToCity);
    }
  }, [cityData]);

  return (
    <main>
      <div className="flex justify-center gap-8 px-2">
        <TopGreen firstWord="WHERE" secondWord="IS" />
        <TopGreen firstWord="THE" secondWord="NEXT" />
      </div>
      <MiddleGreen />
      <CheapFlights />
      <MainContainer flightData={flightData} cityCode={city} />
      <WhyNotGo />
      <SmallCardHolder flightData={flightData} />

      <Grid flightData={flightData} cityCode={city} />
    </main>
  );
}
