import { CheapFlights } from "./components/CheapFlights";
import { MainContainer } from "./components/MainContainer";
import { WhyNotGo } from "./components/WhyNotGo";
import { MiddleGreen } from "./components/MiddleGreen";
import { Nav } from "./components/Nav";
import { TopGreen } from "./components/TopGreen";

export default function Home() {
  return (
    <main className="bg-[#FDFEFE]">
      <Nav />

      <div className="flex justify-center gap-8 px-2 ">
        <TopGreen firstWord="WHERE" secondWord="IS" />
        <TopGreen firstWord="THE" secondWord="NEXT" />
      </div>
      <MiddleGreen />
      <CheapFlights />
      <MainContainer />
      <WhyNotGo />
    </main>
  );
}
