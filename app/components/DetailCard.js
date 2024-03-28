export default function DetailCard() {
  return (
    <div className="w-[30rem] h-[30rem] bg-[var(--color-bg)] rounded-xl shadow-lg flex flex-col justify-between mt-8">
      <div className="flex flex-col justify-evenly h-[28rem] ">
        <div className="p-4 h-[25rem] flex flex-col justify-between gap-8">
          <div className="mb-4 flex flex-col gap-4">
            <div className="text-sm font-semibold text-gray-700 mb-1 ">
              Mon Oct 7 - OutBound
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-[var(--color-green)] text-black rounded-full px-3 py-1 text-lg font-normal">
                YYC
              </div>
              <div className="text-sm font-semibold text-gray-700">Direct</div>
              <div className="bg-[var(--color-green)] text-black rounded-full px-3 py-1 text-lg font-normal">
                YVR
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <div>7:00 am</div>
              <div>6 Hr</div>
              <div>7:00 am</div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[var(--color-bg)] rounded-lg py-2 text-sm font-semibold text-gray-700">
            5 Nights
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <div className="text-sm font-semibold text-gray-700 mb-1">
              Mon Oct 7 - InBound
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-[var(--color-green)] text-black rounded-full px-3 py-1 text-lg font-normal">
                YYC
              </div>
              <div className="text-sm font-semibold text-gray-700">Direct</div>
              <div className="bg-[var(--color-green)] text-black rounded-full px-3 py-1 text-lg font-normal">
                YVR
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <div>7:00 am</div>
              <div>6 Hr</div>
              <div>7:00 am</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 bg-[#e6f7eb] rounded-b-lg">
        <div className="text-lg font-bold text-gray-800"></div>
      </div>
    </div>
  );
}
