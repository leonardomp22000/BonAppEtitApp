import TestimonialCards from "./TestimonialCards";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useIsDesktop from "@/hooks/useIsDesktop";
import Rating from "./Rating";
import useIsMobile from "@/hooks/useIsMobile";
import useIsTablet from "@/hooks/useIsTablet";

const infoComments = [
  {
    name: "Jessica",
    review:
      "Esta aplicación ha cambiado la forma en que pido comida. Es tan fácil de usar y el proceso es facil.",
  },
  {
    name: "Mario",
    review:
      "Me encanta lo simple que es pedir desde mi restaurante favorito. 10/10",
  },
  {
    name: "Laura",
    review:
      "La experiencia de pedir comida nunca ha sido tan sencilla. La interfaz es amigable",
  },
];

export default function Testimonials() {
  const isDesktop = useIsDesktop();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  return (
    <section className="py-12">
      <h2 className="text-center font-poppins text-2xl font-bold text-black md:mx-auto md:mb-12 md:w-[632px] md:text-[32px] md:leading-normal lg:w-[650px] lg:text-5xl lg:leading-[70px]">
        ¿Que dicen nuestros clientes de nosotros?
      </h2>

      {isDesktop ? (
        <div className="flex justify-center">
          <div className="flex w-[980px] justify-between">
            {infoComments.map((info, index) => (
              <TestimonialCards
                key={index}
                review={info.review}
                name={info.name}
              />
            ))}
          </div>
        </div>
      ) : (
        <Swiper
          pagination={{ clickable: true }}
          breakpoints={{
            360: {
              slidesPerView: 1.3,
              centeredSlides: true,
              spaceBetween: 20,
            },
            744: {
              slidesPerView: 1.8,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
        >
          {infoComments.map((info, index) => (
            <SwiperSlide key={index}>
              <TestimonialCards
                key={index}
                review={info.review}
                name={info.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {(isMobile || isTablet) && <Rating />}
    </section>
  );
}
