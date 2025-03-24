import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa los estilos básicos de Swiper
import useIsDesktop from "@/hooks/useIsDesktop";

const tarjetasData = [
  {
    texto: "Recetas de calidad",
    src: "/assets/AboutCardsImages/Quality-recipes.svg",
  },
  { texto: "Facil de usar", src: "/assets/AboutCardsImages/Easy-to-use.svg" },
  {
    texto: "Procesos Faciles",
    src: "/assets/AboutCardsImages/Easy-processes.svg",
  },
];

const AboutCards = () => {
  const isDesktop = useIsDesktop();

  return (
    <>
      {isDesktop ? (
        <div className="flex justify-center">
          <div className="flex w-[1200px] justify-between">
            {tarjetasData.map((tarjeta, index) => (
              <div
                key={index}
                className="inline-flex h-[381px] flex-col items-center justify-center gap-[19px] rounded-[30px] border border-[#e7d6d2] bg-[#fffbfa] p-10"
              >
                <div className="h-[259px] w-[259px]">
                  <Image
                    src={tarjeta.src}
                    alt="Icon"
                    width={260}
                    height={300}
                    layout="responsive"
                  />
                </div>
                <div className="font-robotos w-[262px] text-center text-xl font-bold text-cs500">
                  {tarjeta.texto}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Swiper
          pagination={{ clickable: true }}
          breakpoints={{
            360: {
              slidesPerView: 1.05,
              centeredSlides: true,
              spaceBetween: 20,
            },
            744: {
              slidesPerView: 2,
              spaceBetween: 25,
              centeredSlides: true,
            },
          }}
        >
          {tarjetasData.map((tarjeta, index) => (
            <SwiperSlide key={index}>
              <div className="inline-flex h-[381px] flex-col items-center justify-center gap-[19px] rounded-[30px] border border-[#e7d6d2] bg-[#fffbfa] p-10">
                <div className="relative h-[259px] w-[259px]">
                  <Image
                    src={tarjeta.src}
                    alt="Icon"
                    width={260}
                    height={300}
                    layout="responsive"
                  />
                </div>
                <div className="font-robotos w-[262px] text-center text-xl font-bold text-cs500">
                  {tarjeta.texto}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default AboutCards;
