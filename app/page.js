import { CheapFlights } from "./CheapFlights/page";
import { MainContainer } from "./MainContainer/page";
import { WhyNotGo } from "./WhyNotGo/page";
import { MiddleGreen } from "./components/MiddleGreen/page";
import { Nav } from "./components/Nav/page";
import { TopGreen } from "./components/TopGreen/page";

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
