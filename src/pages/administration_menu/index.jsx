import CardAdministration from "@/components/administration_menu/CardAdministration";
import NavBar from "@/components/NavBar/NavBar";
import { SwiperSlide } from "swiper/react";
import ButtonOutlined from "@/components/ButtonOutlined";
import Category from "@/components/administration_menu/Category";
import TemplateMenu from "../../components/TemplateMenu";
import React, { useState } from "react";
import Modal from "@/components/common_components/Modal";
import InputContained from "@/components/common_components/InputContained";
import OffCanvas from "@/components/common_components/OffCanvas";
const DB = [
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "false",
    image: "/assets/AdministrationMenu/chicken.svg",
    category: "Entradas",
  },
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "true",
    image: "/assets/AdministrationMenu/chicken.svg",
    category: "Bebidas",
  },
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "false",
    image: "/assets/AdministrationMenu/chicken.svg",
    category: "Postres",
  },
];

const menuItems = [
  { href: "#", label: "Dashboard", icon: "DashboardIcon" },
  { href: "#", label: "E-commerce" },
  { href: "#", label: "Inbox" },
  { href: "#", label: "Kanban" },
];

export default function AdministrationMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="">
      <TemplateMenu
        restaurantLogo="/assets/AdministrationMenu/RestaurantLogo.svg"
        userName="Jhon Doue"
        restauranName="Mr.Burguer"
      >
        <div>
          <OffCanvas menuItems={menuItems} title="Navigation" />
        </div>

        {DB.map((data, idx) => (
          <div key={idx} id={data.category}>
            <Category variant="administration" title={data.category}>
              <SwiperSlide>
                <CardAdministration
                  isAvailable={data.isAvailable}
                  nameDish={data.nameDish}
                  description={data.description}
                  price={data.price}
                  image={data.image}
                  variant="editCard"
                  openModal={() => setIsModalOpen(true)}
                />
              </SwiperSlide>
            </Category>
          </div>
        ))}
        <section className="mb-4">
          <div className="flex items-center justify-between">
            <h3 className="font-poppins text-xl font-medium leading-loose tracking-tight lg:text-4xl">
              Nueva categoria
            </h3>
          </div>

          <div className="flex h-[150px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-cs300 md:h-[200px] lg:h-[250px]">
            <p className="font-roboto text-xs font-medium leading-tight tracking-wide text-cs950 md:text-base">
              ¡Comienza aqui agregando tu primer platillo!
            </p>
            <div>
              <InputContained variant="outlined" />
            </div>

            <ButtonOutlined text="Agregar categoria" variant="dashed" />
          </div>
        </section>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </TemplateMenu>
    </main>
  );
}
