import { useState } from "react";
import { StockTableData } from "../../assets/data/StockData";

const StockTable = () => {
  const [activeTab, setActiveTab] = useState("Mini Active");
  const categories = ["Mini Active", "Gainers", "Losers"];

  // Get stocks for the active tab
  const activeStocks = StockTableData.find((item) => item.name === activeTab)?.stocks || [];

  return (
    <div className="w-full mt-10">
      {/* Tabs */}
      <div className="flex gap-x-12 gap-y-6 border-b mt-16 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`pb-4 text-3xl text-nowrap font-medium ${
              activeTab === cat ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left text-[1.7rem] font-medium py-4 px-4">Name</th>
              <th className="text-left text-[1.7rem] font-medium py-4 px-4">Last</th>
              <th className="text-left text-[1.7rem] font-medium py-4 px-4">Ong. %</th>
              <th className="text-left text-[1.7rem] font-medium py-4 px-4">Val.</th>
            </tr>
          </thead>
          <tbody>
            {activeStocks.map((stock, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4 text-2xl font-bold">{stock.name}</td>
                <td className="py-4 px-4 text-2xl">{stock.last}</td>
                <td
                  className={`py-4 px-4 text-2xl ${
                    stock.change.startsWith("+") ? "text-green-600" : stock.change.startsWith("-") ? "text-red-600" : ""
                  }`}
                >
                  {stock.change}
                </td>
                <td className="py-4 px-4 text-2xl">{stock.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTable;
