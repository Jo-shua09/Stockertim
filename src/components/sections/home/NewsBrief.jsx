import { useState } from "react";
import NewsData from "../../../assets/data/NewsData";
import { MdKeyboardArrowRight } from "react-icons/md";
const categories = ["Trending News", "Tech", "Stock", "Cryptocurrency", "Energy", "Politics"];

export default function NewsBrief() {
  const [activeTab, setActiveTab] = useState("trending");

  const getCategoryData = (name) => NewsData.find((cat) => cat.name.toLowerCase() === name.toLowerCase())?.news || [];

  return (
    <div className="w-full mt-20">
      <h3 className="flex items-end w-fit gap-6 cursor-pointer hover:scale-95 font-bold  text-5xl md:text-6xl">
        news <MdKeyboardArrowRight className=" text-5xl md:text-6xl" />
      </h3>

      {/* Tabs */}
      <div className="flex gap-x-12 gap-y-6 border-b mt-16 flex-wrap">
        {categories.map((cat) => {
          const tabKey = cat.toLowerCase().split(" ")[0];
          return (
            <button
              key={cat}
              onClick={() => setActiveTab(tabKey)}
              className={`pb-6 md:text-4xl text-3xl text-nowrap font-medium ${
                activeTab === tabKey ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* News Items */}
      <div className="mt-6 space-y-6">
        {getCategoryData(activeTab).map((item, idx) => (
          <div key={idx} className="flex border-b pb-4 gap-4 items-end">
            <img src={item.image} alt={item.title} loading="lazy" className="w-[20rem] h-[12rem] border object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-semibold text-3xl mb-1">{item.title}</h3>
              <p className="text-[1.7rem] normal-case text-gray-700 line-clamp-2">{item.desc}</p>
              <div className="text-2xl normal-case text-gray-500 mt-2 space-x-4">
                <span>{item.day}</span>
                <span>{item.time}</span>
                <span>• {item.comments} Comments</span>
                <span>• By {item.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <button className="text-3xl font-medium text-blue-500 normal-case cursor-pointer hover:underline">Show more news</button>
      </div>
    </div>
  );
}
