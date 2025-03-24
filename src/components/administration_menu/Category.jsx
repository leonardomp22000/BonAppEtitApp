import Switch from "@/components/common_components/Switch";
import SwiperConfiguration from "@/components/administration_menu/SwiperConfiguration";
import { SwiperSlide } from "swiper/react";
import ButtonContained from "@/components/common_components/ButtonContained";
import CardAdministration from "@/components/administration_menu/CardAdministration";
import { useState } from "react";
import Modal from "../common_components/Modal";

export default function Category({ title, children, variant }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="mb-4">
      <div className="flex items-center justify-between">
        <h3 className="font-poppins text-xl font-medium leading-loose tracking-tight lg:text-4xl">
          {title}
        </h3>
        {variant === "administration" && (
          <div className="flex gap-1 md:gap-3">
            <Switch label="Deshabilitar categoria"></Switch>
            <ButtonContained
              text="Eliminar"
              tailwindClasses=" bg-red-600 !px-2 !py-1  text-xs"
              variant="generalPoppins"
            ></ButtonContained>
          </div>
        )}
      </div>

      <div>
        <SwiperConfiguration>
          {variant === "administration" && (
            <SwiperSlide>
              <CardAdministration
                openModal={() => setIsModalOpen(true)}
                variant="AddCard"
              />
            </SwiperSlide>
          )}

          {children}
        </SwiperConfiguration>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
