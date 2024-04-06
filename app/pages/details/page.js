"use client";
import DetailCard from "@/app/components/DetailCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const flight = router.query ? router.query.flight : null;

  console.log(flight);
  return (
    <main className="bg-[var(--color-bg)] bg-fixed flex flex-col  items-center justify-center ">
      <div>
        <DetailCard />
      </div>
    </main>
  );
}
