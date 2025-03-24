import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useSwiper } from "swiper/react";

export default function Arrow({ variant }) {
  const swiper = useSwiper();

  return (
    <>
      {variant === "left" && (
        <button
          onClick={() => swiper && swiper.slidePrev()}
          aria-label="Slide Left"
        >
          <ChevronLeftIcon
            className="h-10 w-10 text-cs500 hover:text-cs600 active:text-cs800 md:h-12 md:w-12 lg:h-16 lg:w-16"
            strokeWidth={2}
          />
        </button>
      )}
      {variant === "right" && (
        <button
          onClick={() => swiper && swiper.slideNext()}
          aria-label="Slide Right"
        >
          <ChevronRightIcon
            className="h-10 w-10 text-cs500 hover:text-cs600 active:text-cs800 md:h-12 md:w-12 lg:h-16 lg:w-16"
            strokeWidth={2}
          />
        </button>
      )}
      {variant === "up" && (
        <button
          onClick={() => swiper && swiper.slidePrev()}
          aria-label="Slide Up"
          className="-rotate-90 transform"
        >
          <ChevronRightIcon
            className="h-10 w-10 text-cs500 hover:text-cs600 active:text-cs800 md:h-12 md:w-12 lg:h-16 lg:w-16"
            strokeWidth={2}
          />
        </button>
      )}
      {variant === "down" && (
        <button
          onClick={() => swiper && swiper.slideNext()}
          aria-label="Slide Down"
          className="rotate-90 transform"
        >
          <ChevronRightIcon
            className="h-10 w-10 text-cs500 hover:text-cs600 active:text-cs800 md:h-12 md:w-12 lg:h-16 lg:w-16"
            strokeWidth={2}
          />
        </button>
      )}
    </>
  );
}
