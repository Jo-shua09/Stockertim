export default function TradeCard({ data }) {
  return (
    <div className="bg-white rounded-xl border p-6 w-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-start">
          <div className="">
            <h3 className="text-4xl font-semibold">{data.ticker}</h3>
            <p className="text-xl text-nowrap text-gray-500">{data.company}</p>
          </div>
          <span className={`text-white text-nowrap px-3 py-1 rounded-full text-xl ${data.type === "buy" ? "bg-green-500" : "bg-red-500"}`}>
            {data.type === "buy" ? "Buy Now" : "Sell Now"}
          </span>
        </div>
        <div className="">
          <p className="text-2xl text-gray-600 font-semibold">${data.price} USD</p>
          <p className="text-xl text-green-600 mb-2">{data.potential} today</p>
        </div>
      </div>

      <div className="grid grid-cols-2 pt-12  gap-4 border-gray-100">
        <div className="bg-gray-50 rounded-3xl p-3 w-full">
          <h4 className="font-medium text-xl">Target Price</h4>
          <p className="text-3xl pt-16 font-semibold">{data.target}</p>
          <p className="text-green-600 text-xl">{data.potential} Potential</p>
        </div>
        <div className="bg-gray-50 rounded-3xl p-3 w-full">
          <h4 className="font-medium text-xl">Stop Loss</h4>
          <p className="text-3xl pt-16 font-semibold">{data.stopLoss}</p>
          <p className="text-red-500 text-xl">{data.risk} Risk</p>
        </div>
      </div>

      <div className="mt-12 text-2xl bg-gray-50 rounded-3xl p-3">
        <h4 className="font-bold mb-3">Analysis</h4>
        <p className="text-gray-500 text-xl normal-case">{data.analysis}</p>
      </div>

      <div className="mt-12 text-green-500 text-2xl font-medium bg-gray-50 rounded-3xl p-3">{data.hold}</div>
    </div>
  );
}
