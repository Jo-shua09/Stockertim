import { MdKeyboardArrowRight } from "react-icons/md";

const DailyBrief = () => {
  const stockData = [
    {
      id: 1,
      symbol: "HOOD",
      name: "Robinhood Markets Inc.",
      buyZone: "$70.00 – $71.97 per share",
      analysis:
        "Robinhood continues to gain momentum on the back of its expanding product offerings and growing retail investor base. This pullback presents a chance to accumulate at a fair valuation.",
    },
    {
      id: 2,
      symbol: "UBER",
      name: "Uber Technologies Inc.",
      buyZone: "$83.99 – $84.09 per share",
      analysis:
        "Despite potential short-term competition from Tesla's robotaxi developments, Uber remains the undisputed leader in ride-hailing and is already invested in autonomous tech through Waymo and Wayve. The fundamentals remain strong.",
    },
  ];

  return (
    <div className="w-full mt-20">
      <h3 className="flex items-end w-fit gap-6 cursor-pointer hover:scale-95 font-bold text-5xl md:text-6xl">
        Daily brief <MdKeyboardArrowRight className=" text-5xl md:text-6xl" />
      </h3>

      {/* Stock Recommendations */}
      <div className="mt-16 space-y-8">
        {stockData.map((stock) => (
          <div key={stock.id} className="border-b pb-8">
            <div className="flex items-center gap-2 mb-4">
              <h4 className="font-bold text-4xl">{stock.name}</h4>
              <span className="text-3xl text-gray-600">(${stock.symbol})</span>
            </div>

            <div className="bg-green-500 px-8 py-4 rounded-full inline-block mb-4">
              <span className="text-3xl font-semibold normal-case text-white">Buy Zone: {stock.buyZone}</span>
            </div>

            <p className="text-[1.7rem] text-gray-800 leading-normal normal-case">{stock.analysis}</p>
          </div>
        ))}

        <div className="flex justify-end mt-6">
          <button className="text-3xl font-medium text-blue-500 normal-case cursor-pointer hover:underline">Show more news</button>
        </div>
        {/* {!expanded && (
          <div className="flex justify-end mt-6">
            <button onClick={() => setExpanded(true)} className="text-3xl font-medium text-blue-500 normal-case cursor-pointer hover:underline">
              Show more news
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DailyBrief;
