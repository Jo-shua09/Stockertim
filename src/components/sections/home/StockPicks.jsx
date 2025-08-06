import { useState } from "react";
import StockData from "../../../assets/data/StockData";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";

const categories = ["VBTC-500", "Tenet", "Iron dome", "Global Stars", "Moonshots", "ETFs- Index Funds"];

export default function StockPicks() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const getCategoryData = (name) => {
    const category = StockData.find((cat) => cat.name.toLowerCase() === name.toLowerCase());
    return category?.stocks || [];
  };

  const currentData = getCategoryData(activeTab);

  return (
    <div className="w-full mt-20">
      <h3 className="flex items-end w-fit gap-6 cursor-pointer hover:scale-95 font-bold  text-5xl md:text-6xl">
        Stock Picks <MdKeyboardArrowRight className=" text-5xl md:text-6xl" />
      </h3>

      {/* Tabs */}
      <div className="flex gap-x-12 gap-y-6 border-b mt-16 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`pb-6 md:text-4xl text-3xl text-nowrap font-medium ${
              activeTab === cat ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto custom-scrollbar pb-10">
        <table className="w-full mt-6 text-left text-nowrap text-2xl">
          <thead className="text-gray-500">
            <tr className="border-b">
              <th className="pb-4 w-full pr-16">Ticker</th>
              <th className="pb-4 w-full pr-16">Name</th>
              <th className="pb-4 w-full pr-16">Market Cap ($B)</th>
              <th className="pb-4 w-full pr-16">Current Price</th>
              <th className="pb-4 w-full pr-16">% Share Portfolio</th>
              <th className="pb-4 w-full pr-16">% Margin 52Wks - High</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((item, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="py-4 w-full pr-16 relative">
                    <div className="absolute w-full h-full bg-transparent backdrop-blur-sm flex items-center justify-center top-0 left-0 right-0 bottom-0">
                      <HiOutlineLockClosed className="text-4xl text-blue-700" />
                    </div>
                    {item.ticker}
                  </td>
                  <td className="py-4 w-full pr-16 relative">
                    <div className="absolute w-full h-full bg-transparent backdrop-blur-sm flex items-center justify-center top-0 left-0 right-0 bottom-0">
                      <HiOutlineLockClosed className="text-4xl text-blue-700" />
                    </div>
                    {item.name}
                  </td>
                  <td className="py-4 w-full pr-16">{item.marketCap}</td>
                  <td className="py-4 w-full pr-16">{item.price}</td>
                  <td className="py-4 w-full pr-16">{item.portfolioShare}</td>
                  <td className="py-4 w-full pr-16">{item.marginHigh}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-8 text-center normal-case text-gray-500 text-3xl">
                  No data available for this category
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-6">
        <button className="text-3xl font-medium text-blue-500 normal-case cursor-pointer hover:underline">Show more stock picks</button>
      </div>
    </div>
  );
}
