const IBRGPortfolio = () => {
  return (
    <div className="w-full mx-auto mt-16 text-white font-semibold">
      <div className="bg-black text-center py-5 max-w-xl md:max-w-5xl m-auto">
        <h2 className="text-2xl font-semibold">IBRG Composite Portfolio</h2>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 text-center">
        {/* Top Row */}
        <div className="bg-gray-500 flex items-center justify-center text-3xl font-medium border-dotted border border-white col-span-2">
          Performance YTD
        </div>
        <div className="bg-gray-500 flex items-center justify-center text-3xl font-medium border-dotted border border-white col-span-2">
          PLTR As % Portfolio
        </div>

        {/* Second Row (Green Numbers) */}
        <div className="bg-green-600 py-10  text-5xl md:text-6xl border-dotted border border-white">56.59%</div>
        <div className="bg-green-600 py-10  text-5xl md:text-6xl border-dotted border border-white">56.59%</div>
        <div className="bg-green-600 py-10  text-5xl md:text-6xl border-dotted border border-white col-span-2">52.78%</div>

        {/* Bottom Row Left & Right Labels */}
        <div className="bg-gray-500 py-2 border-dotted border border-white row-span-1 col-span-1 flex items-center justify-center text-3xl">
          NASDAQ 100 YTD
        </div>
        <div className="bg-green-600 py-10  text-5xl md:text-6xl border-dotted border border-white col-span-1">8.61%</div>
        <div className="bg-green-600 py-10  text-5xl md:text-6xl border-dotted border border-white col-span-1">6.67%</div>
        <div className="bg-gray-500 py-2 border-dotted border border-white col-span-1 flex items-center justify-center text-3xl">S&P 500 YTD</div>
      </div>
    </div>
  );
};

export default IBRGPortfolio;
