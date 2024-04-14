export function MedCardButton({ flight }) {
  const flightMiniButton = flight;
  return (
    <div className=" flex w-[20rem] p-2 justify-center items-center  pb-1">
      <div className="flex justify-center items-center h-[2rem] w-[10rem] text-white">
        {flightMiniButton.destination} | From $ {`${flightMiniButton.price}`}
      </div>
    </div>
  );
}
