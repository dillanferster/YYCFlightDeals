"use client";
import DetailCard from "@/app/components/DetailCard";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  const flight = JSON.parse(data);

  console.log("Data:", flight);

  return (
    <main className="bg-[var(--color-bg)] bg-fixed flex flex-col  items-center justify-center ">
      <div>
        <DetailCard />
      </div>
    </main>
  );
}
