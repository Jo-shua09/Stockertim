import { MdKeyboardArrowRight } from "react-icons/md";
import { VideoData } from "../../../assets/data/VideoData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function VideoBrief() {
  return (
    <div>
      <div className="w-full mt-20 px-4 md:px-10">
        <h3 className="flex items-end w-fit gap-6 cursor-pointer hover:scale-95 font-bold  text-5xl md:text-6xl">
          videos <MdKeyboardArrowRight className=" text-5xl md:text-6xl" />
        </h3>

        <div className="mt-8 md:mt-16">
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
            {VideoData.map((video, idx) => (
              <SwiperSlide key={idx}>
                <div className="mt-6 flex flex-col gap-6">
                  <div className="w-full cursor-pointer">
                    <video controls style={{ width: "100%", height: "100%" }} className="rounded-2xl">
                      <source src={video.video} type="video/mp4" />
                    </video>
                  </div>
                  <p className="text-3xl font-normal normal-case">{video.desc}</p>
                  <small className="text-xl normal-case">{video.time}h ago</small>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-end mt-20">
          <button className="text-3xl font-medium text-blue-500 normal-case cursor-pointer hover:underline">Show more videos</button>
        </div>
      </div>
    </div>
  );
}
