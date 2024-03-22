import { MiniCard } from "./MiniCard/MiniCard";
import { MediumCard } from "./MediumCard";

export function SmallCardHolder() {
  return (
    <div className="mt-16 flex justify-evenly max-w-[62rem] mx-auto">
      <MiniCard />
      <MiniCard />
      <MediumCard />
      <MiniCard />
      <MiniCard />
    </div>
  );
}
