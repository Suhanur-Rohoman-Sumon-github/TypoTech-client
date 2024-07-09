import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";
import { companiesLogos } from "@/data/data";
const Brands = () => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
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
      {companiesLogos.map((imge, index) => (
        <SwiperSlide key={index}>
          <div className="">
            <img
              src={imge.image}
              alt="company images"
              className="w-12 h-12"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
