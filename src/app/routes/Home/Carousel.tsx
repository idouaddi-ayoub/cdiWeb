import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CDI from "../../../assets/images/background/CDI_logo.png";

import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="w-4/6"
    >
      <SwiperSlide>
        <img src={CDI} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={CDI} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={CDI} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={CDI} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
