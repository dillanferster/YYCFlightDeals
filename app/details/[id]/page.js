"use client";
import DetailCard from "@/app/components/DetailCard";
import { useState, useEffect } from "react";
import { fetchData, fetchCityData } from "@/app/components/fetchData";

export default function Home({ params }) {
  const id = params.id;

  const [flightDataDetail, setFlightDataDetail] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [city, setCity] = useState({});

  async function getFlights() {
    const flights = await fetchData();

    // Assuming flights.data is an object like the one you've described
    const flightsArray = Object.values(flights.data);

    setFlightDataDetail(flightsArray[id]);

    // // // Now you can access the first flight object
    // const foundFlight = flightsArray[0];
  }

  async function getCityData() {
    const citys = await fetchCityData();

    setCityData(citys);
  }

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

  if (cityData && flightDataDetail) {
    flightDataDetail.city = city[flightDataDetail.destination];
    console.log(flightDataDetail.city);
  }

  useEffect(() => {
    getFlights();
    getCityData();
  }, []);

  return (
    <main className="bg-[var(--color-bg)] bg-fixed flex flex-col  items-center justify-center mx-auto ">
      <div className="mb-8">
        <DetailCard flightDetail={flightDataDetail} />
      </div>
    </main>
  );
}
