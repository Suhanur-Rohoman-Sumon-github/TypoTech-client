import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";
import { advertisement } from "@/data/data";
const Brands = () => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: false,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Autoplay]}
      className=" mt-4"
    >
      {advertisement.map((imge, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center gap-3">
            <img
              src={imge.image}
              alt="company images"
              className="w-4 h-4"
              loading="lazy"
            />
            <p className="hidden sm:block">{imge.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
