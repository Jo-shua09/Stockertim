import { useState } from "react";
import TradeData from "../../../assets/data/TradeData";
import TradeCard from "../../ui/TradeCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const tabs = ["All", "Buy", "Sell"];

export default function TradeAlerts() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = activeTab === "All" ? TradeData : TradeData.filter((item) => item.type === activeTab.toLowerCase());

  return (
    <div className="w-full mt-20">
      <h3 className="flex items-end w-fit gap-6 cursor-pointer hover:scale-95 font-bold  text-5xl md:text-6xl">
        Trade alerts <MdKeyboardArrowRight className=" text-5xl md:text-6xl" />
      </h3>

      <div className="flex gap-x-12 gap-y-6 border-b mt-16 flex-wrap mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-6 md:text-4xl text-3xl text-nowrap font-medium ${
              activeTab === tab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={1.5}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 2.5 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {filteredData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <TradeCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-end mt-6">
        <button className="text-3xl font-medium text-blue-500 normal-case cursor-pointer hover:underline">Show more trade alerts</button>
      </div>
    </div>
  );
}
