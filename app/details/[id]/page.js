"use client";
import DetailCard from "@/app/components/DetailCard";
import { useState, useEffect } from "react";
import { fetchData } from "@/app/components/fetchData";

export default function Home({ params }) {
  const id = params.id;

  const [flightDataDetail, setFlightDataDetail] = useState([]);

  async function getFlights() {
    const flights = await fetchData();

    // Assuming flights.data is an object like the one you've described
    const flightsArray = Object.values(flights.data);

    setFlightDataDetail(flightsArray[id]);

    // // // Now you can access the first flight object
    // const foundFlight = flightsArray[0];
  }

  useEffect(() => {
    getFlights();
  }, []);

  console.log(flightDataDetail);

  return (
    <main className="bg-[var(--color-bg)] bg-fixed flex flex-col  items-center justify-center ">
      <div>
        <DetailCard flightDetail={flightDataDetail} />
      </div>
    </main>
  );
}
