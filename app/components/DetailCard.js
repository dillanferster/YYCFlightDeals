import { DateTime } from "luxon";
import Link from "next/link";

export default function DetailCard({ flightDetail }) {
  const flightDetails = flightDetail;

  //departure formatting
  const departure = flightDetails.departure_at;
  const departureTime = DateTime.fromISO(departure).toFormat("HH:mm:ss");
  const departureDate = DateTime.fromISO(departure).toFormat("EEEE, MMMM dd");

  const departureDateForUrl = DateTime.fromISO(departure).toFormat("ddMM");

  // return formatting
  const returnAt = flightDetails.return_at;
  const returnAtTime = DateTime.fromISO(returnAt).toFormat("HH:mm:ss");
  const returnAtDate = DateTime.fromISO(returnAt).toFormat("EEEE, MMMM dd");

  const returnAtDateForUrl = DateTime.fromISO(returnAt).toFormat("ddMM");

  //trip duration
  const end = DateTime.fromISO(returnAt);
  const start = DateTime.fromISO(departure);
  const diffInDays = end.diff(start, "days");
  const days = Math.floor(diffInDays.days);

  return (
    <div className="flex flex-wrap justify-between items-center p-8 gap-4 bg-transparent">
      <div className="w-[30rem] h-[30rem] max-sm:w-[21rem] bg-white  rounded-xl shadow-lg flex flex-col justify-between ">
        <div className="flex flex-col justify-evenly h-[28rem] ">
          <div className="p-4 h-[25rem] flex flex-col justify-between gap-8">
            <div className="mb-4 flex flex-col gap-4">
              <div className="text-sm font-semibold text-gray-700 mb-1 ">
                {`${departureDate} - OutBound`}
              </div>
              <div className="flex items-center justify-between">
                <div className="bg-gray-300 text-slate-900 rounded-full px-3 py-1 text-lg font-normal">
                  YYC
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {flightDetails.transfers === 0
                    ? "Direct"
                    : `stops: ${flightDetails.transfers}`}
                </div>
                <div className="bg-gray-300 text-slate-900  rounded-full px-3 py-1 text-lg font-normal">
                  {flightDetails.destination}
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <div>{departureTime}</div>
                <div>{`Flight Number: ${flightDetails.flight_number}`}</div>
              </div>
            </div>
            <div className="flex justify-center items-center border rounded-lg py-2 text-sm font-semibold text-gray-700">
              {`Trip Duration: ${days} days`}
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <div className="text-sm font-semibold text-gray-700 mb-1">
                {`${returnAtDate} - InBound`}
              </div>
              <div className="flex items-center justify-between">
                <div className="bg-gray-300 text-slate-900  rounded-full px-3 py-1 text-lg font-normal">
                  {flightDetails.destination}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {flightDetails.transfers === 0
                    ? "Direct"
                    : `stops: ${flightDetails.transfers}`}
                </div>
                <div className="bg-gray-300 text-slate-900  rounded-full px-3 py-1 text-lg font-normal">
                  YYC
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <div>{returnAtTime}</div>
                <div>{`Airline : ${flightDetails.airline}`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 bg-[var(--color-green)] rounded-b-lg"></div>
      </div>
      <div className="h-[30rem] w-[12rem]  bg-white  rounded-xl shadow-lg flex flex-col justify-end max-md:h-[15rem] max-md:w-[30rem] max-sm:w-[21rem]">
        <div className="mb-[9.5rem] max-md:mb-[4rem]">
          <span className=" flex  justify-center font-medium text-lg text-slate-700">
            {`CA $${flightDetails.price}`}
          </span>
        </div>

        <div className="flex justify-center mb-5 ">
          <Link
            target="blank"
            href={`https://www.aviasales.com/search/YYC${departureDateForUrl}${flightDetails.destination}${returnAtDateForUrl}1?request_source=search_form`}
          >
            <div className="flex [&>*]:hover:bg-slate-700 cursor-pointer ">
              <button className="  p-1  bg-gray-800 rounded-lg h-8 w-[6rem]   text-white ">
                Select
              </button>
              <div className="p-1 bg-gray-800 rounded-lg h-8 w-[2rem] flex justify-center items-center  text-white">
                +
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-between items-center p-4 bg-[var(--color-green)] rounded-b-lg"></div>
      </div>
    </div>
  );
}
