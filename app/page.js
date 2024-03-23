import { CheapFlights } from "./components/CheapFlights";
import { MainContainer } from "./components/MainContainer/MainContainer";
import { WhyNotGo } from "./components/WhyNotGo";
import { MiddleGreen } from "./components/MiddleGreen";
import { Nav } from "./components/Nav";
import { TopGreen } from "./components/TopGreen";
import { SmallCardHolder } from "./components/SmallCardHolder";

export default function Home() {
  return (
    <main className="bg-[#FDFEFE] flex-col align-middle items-center justify-center">
      <Nav />

      <div className="flex justify-center gap-8 px-2">
        <TopGreen firstWord="WHERE" secondWord="IS" />
        <TopGreen firstWord="THE" secondWord="NEXT" />
      </div>
      <MiddleGreen />
      <CheapFlights />
      <MainContainer />
      <WhyNotGo />
      <SmallCardHolder />
      <MainContainer />
      <MainContainer />
      <MainContainer />
      <MainContainer />
      <MainContainer />
    </main>
  );
}
