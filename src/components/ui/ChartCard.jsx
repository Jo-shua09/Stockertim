import { AreaChart, Area, ResponsiveContainer } from "recharts";

const ChartCard = ({ stock }) => {
  const badgeStyle = stock.name.includes("S&P")
    ? "bg-red-100 text-red-500"
    : stock.name.includes("Nasdaq")
    ? "bg-blue-100 text-blue-500"
    : "bg-black text-white";

  return (
    <div className="bg-white shadow-xl rounded-xl border w-full">
      <div className="space-y-4 px-5 pt-5">
        <div className="flex items-center justify-between ">
          <span className={`text-2xl font-semibold px-2 py-1 rounded-full ${badgeStyle}`}>{stock.name}</span>
        </div>
        <div className="text-3xl font-bold">${stock.price.toFixed(2)} USD</div>
        <div className={`text-xl mt-2 ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}>
          {stock.change >= 0 ? "+" : ""}
          {stock.change.toFixed(2)}% today
        </div>
      </div>
      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={stock.data.map((val, idx) => ({ name: `P${idx}`, value: val }))}>
            <Area type="monotone" dataKey="value" stroke={stock.color} fill={stock.color} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
