import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Arrow from "./Arrow";

export default function SwiperConfiguration({ children, variantDirection }) {
  return (
    <>
      {variantDirection === "vertical" ? (
        <Swiper
          direction="vertical"
          spaceBetween={20}
          slidesPerView={3}
          modules={[Navigation]} // Asegúrate de que el módulo esté aquí
        >
          <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 transform">
            <Arrow variant="up" />
          </div>
          <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 transform">
            <Arrow variant="down" />
          </div>
          {children}
        </Swiper>
      ) : (
        <Swiper
          modules={[Navigation]}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              centeredSlides: false,
              spaceBetween: 0,
            },
            360: {
              slidesPerView: 2,
              centeredSlides: false,
              spaceBetween: 2,
            },
            744: {
              slidesPerView: 2.6,
              spaceBetween: 24,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 22,
              centeredSlides: false,
            },
          }}
        >
          <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
            <Arrow variant="left" />
          </div>
          <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
            <Arrow variant="right" />
          </div>
          {children}
        </Swiper>
      )}
    </>
  );
}
