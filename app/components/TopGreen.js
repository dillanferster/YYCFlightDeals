export function TopGreen({ firstWord, secondWord}) {


  return (
    <div className="flex justify-between self-center  align-middle gap-5 w-[30rem] h-[2rem] text-l px-4  bg-[var(--color-green)] border-[.1rem] border-black  max-w-[525px] rounded-full text-zinc-950 ">
      <div className="flex flex-col justify-center">{firstWord}</div>
      <div className="flex flex-col justify-center">{secondWord}</div>
    </div>
  );
}
