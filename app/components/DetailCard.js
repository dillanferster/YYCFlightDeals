import { DateTime } from "luxon";

export default function DetailCard({ flightDetail }) {
  const flightDetails = flightDetail;

  //departure formatting
  const departure = flightDetails.departure_at;
  const departureTime = DateTime.fromISO(departure).toFormat("HH:mm:ss");
  const departureDate = DateTime.fromISO(departure).toFormat("EEEE, MMMM dd");

  // return formatting
  const returnAt = flightDetails.return_at;
  const returnAtTime = DateTime.fromISO(returnAt).toFormat("HH:mm:ss");
  const returnAtDate = DateTime.fromISO(returnAt).toFormat("EEEE, MMMM dd");

  console.log(departureTime);
  console.log(departureDate);
  console.log(returnAtTime);
  console.log(returnAtDate);

  return (
    <div className="flex flex-wrap justify-between items-center p-8 gap-4 bg-transparent">
      <div className="w-[30rem] h-[30rem] bg-white  rounded-xl shadow-lg flex flex-col justify-between ">
        <div className="flex flex-col justify-evenly h-[28rem] ">
          <div className="p-4 h-[25rem] flex flex-col justify-between gap-8">
            <div className="mb-4 flex flex-col gap-4">
              <div className="text-sm font-semibold text-gray-700 mb-1 ">
                {departureDate} - OutBound
              </div>
              <div className="flex items-center justify-between">
                <div className="bg-gray-300 text-slate-900 rounded-full px-3 py-1 text-lg font-normal">
                  YYC
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  Direct
                </div>
                <div className="bg-gray-300 text-slate-900  rounded-full px-3 py-1 text-lg font-normal">
                  {flightDetails.destination}
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <div>{departureTime}</div>
                <div>Flight Number: {flightDetails.flight_number}</div>
              </div>
            </div>
            <div className="flex justify-center items-center border rounded-lg py-2 text-sm font-semibold text-gray-700">
              days
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <div className="text-sm font-semibold text-gray-700 mb-1">
                {returnAtDate} - InBound
              </div>
              <div className="flex items-center justify-between">
                <div className="bg-gray-300 text-slate-900  rounded-full px-3 py-1 text-lg font-normal">
                  {flightDetails.destination}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  Direct
                </div>
                <div className="bg-gray-300 text-slate-900  rounded-full px-3 py-1 text-lg font-normal">
                  YYC
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <div>{returnAtTime}</div>
                <div>Airline : {flightDetails.airline}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 bg-[var(--color-green)] rounded-b-lg"></div>
      </div>
      <div className="h-[30rem] w-[12rem]  bg-white  rounded-xl shadow-lg flex flex-col justify-end">
        <div className="mb-[9.5rem]">
          <span className=" flex  justify-center font-medium text-lg text-slate-700">
            CA ${flightDetails.price}
          </span>
        </div>

        <div className="flex justify-center mb-5 ">
          <div className="flex [&>*]:hover:bg-gray-500 cursor-pointer ">
            <button className="  p-1  bg-gray-800 rounded-lg h-8 w-[6rem]   text-white [&>*]:hover:bg-gray-500">
              Select
            </button>
            <div className="p-1 bg-gray-800 rounded-lg h-8 w-[2rem] flex justify-center items-center  text-white">
              +
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 bg-[var(--color-green)] rounded-b-lg"></div>
      </div>
    </div>
  );
}
