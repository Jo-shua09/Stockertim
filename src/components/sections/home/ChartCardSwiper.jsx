import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import ChartData from "../../../assets/data/ChartData";
import ChartCard from "../../ui/ChartCard";

const ChartCardSwiper = () => {
  return (
    <div className="w-full px-16 pt-16">
      <Swiper
        spaceBetween={16}
        slidesPerView={2.5}
        breakpoints={{
          450: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {ChartData.map((stock, index) => (
          <SwiperSlide key={index}>
            <ChartCard stock={stock} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChartCardSwiper;
