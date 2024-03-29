import "./MainContainer.css";

export function MainContainerButton() {
  return (
    <div
      id="MainCB"
      className=" flex w-[63rem] p-2 justify-end items-center pr-12 pb-3 gap-2 "
    >
      <div className="flex justify-center items-center h-[2rem] border-white border-2 rounded-full w-[16rem] text-white">
        YYC &rarr; Place | From $000
      </div>
      <button
        id="MainContainerBtn"
        className="h-[2rem] border-white border-2 rounded-full w-[4rem] text-[var(--color-green)] text-xl hover:border-[var(--color-green)] "
      >
        &rarr;
      </button>
    </div>
  );
}
