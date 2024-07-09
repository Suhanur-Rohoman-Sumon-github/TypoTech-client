import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import {
  FaArrowRight,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { keyboardBrands, testimonialInfo } from "@/data/data";

const ProductsCarousel = () => {
  const [swiper, setSwiper] = useState(null);

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        onSwiper={setSwiper}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {testimonialInfo.map((testimonial, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${testimonial?.img})`,
                }}
                className="  w-full h-[300px] md:h-[500px] bg-cover bg-center text-white"
              >
                <div className="flex absolute  bottom-2 left-2">
                  <button className="button-primary ">
                    Shop Now <FaArrowRight />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
