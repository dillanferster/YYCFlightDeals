export default function DetailCard() {
  return (
    <div className="w-[350px] bg-white rounded-lg shadow-md">
      <div>
        <div className="p-4">
          <div className="mb-4">
            <div className="text-sm font-semibold text-gray-700 mb-1">
              Mon Oct 7 - OutBound
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-green-200 text-green-700 rounded-full px-3 py-1 text-lg font-bold">
                YYC
              </div>
              <div className="text-sm font-semibold text-gray-700">Direct</div>
              <div className="bg-green-200 text-green-700 rounded-full px-3 py-1 text-lg font-bold">
                YVR
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <div>7:00 am</div>
              <div>6 Hr</div>
              <div>7:00 am</div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-gray-100 rounded-lg py-2 text-sm font-semibold text-gray-700">
            5 Nights
          </div>
          <div className="mt-4">
            <div className="text-sm font-semibold text-gray-700 mb-1">
              Mon Oct 7 - OutBound
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-green-200 text-green-700 rounded-full px-3 py-1 text-lg font-bold">
                YYC
              </div>
              <div className="text-sm font-semibold text-gray-700">Direct</div>
              <div className="bg-green-200 text-green-700 rounded-full px-3 py-1 text-lg font-bold">
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
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-b-lg">
        <div className="text-lg font-bold text-gray-800"></div>
      </div>
    </div>
  );
}
