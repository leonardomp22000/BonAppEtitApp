import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ButtonContained from "../common_components/ButtonContained";
import LayoutCard from "../common_components/LayoutCard";
import Image from "next/image";
import clsx from "clsx";

export default function Card({
  titleInfo,
  info,
  children,
  showIcon = false,
  iconSrc,
  isCashCard = false,
  tailwindClasses,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    if (!isCashCard) {
      setIsExpanded(!isExpanded);
    }
  };
  return (
    <LayoutCard>
      <section className={`px-[16px] md:px-[35px] ${tailwindClasses}`}>
        <div className="flex items-center justify-between">
          {showIcon === true ? (
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 md:h-[100px] md:w-[100px]">
                <Image
                  src={iconSrc}
                  alt="CreditCard"
                  width={30}
                  height={30}
                  layout="responsive"
                />
              </div>

              <div className="flex flex-col">
                <h6 className="font-poppins text-base font-semibold leading-tight text-[#222222] md:text-2xl">
                  {titleInfo}
                </h6>
                <p className="font-poppins text-sm font-medium leading-[18px] text-[#717171] md:text-xl">
                  {info}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <h6 className="font-poppins text-base font-semibold leading-tight text-[#222222] lg:text-lg">
                {titleInfo}
              </h6>
              <p className="font-poppins text-sm font-medium leading-[18px] text-[#717171] lg:text-base">
                {info}
              </p>
            </div>
          )}

          <button type="button" onClick={toggleExpand}>
            <ArrowRightIcon
              strokeWidth={2}
              className={`h-7 w-7 text-cs500 transition-transform duration-300 ease-in-out md:h-8 md:w-8 lg:h-9 lg:w-9 ${isExpanded ? "rotate-90" : ""}`}
            />
          </button>
        </div>

        <section
          className={clsx(
            "transform overflow-hidden transition-all duration-300 ease-in-out",
            {
              "max-h-screen opacity-100": isExpanded,
              "max-h-0 opacity-0": !isExpanded,
            },
          )}
        >
          <div className="mt-4 px-1">
            {children}
            {!isCashCard && ( // Oculta botones en el caso especial
              <div className="my-3 flex w-full justify-between md:justify-end md:gap-7">
                <ButtonContained
                  type="button"
                  variant="generalPoppins"
                  text="Guardar cambios"
                />
                <ButtonContained
                  type="button"
                  variant="text"
                  text="Descartar"
                />
              </div>
            )}
          </div>
        </section>
      </section>
    </LayoutCard>
  );
}
