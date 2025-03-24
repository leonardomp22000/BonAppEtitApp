import CardAdministration from "@/components/administration_menu/CardAdministration";
import { SwiperSlide } from "swiper/react";
import Category from "@/components/administration_menu/Category";
import TemplateMenu from "../../components/TemplateMenu";
import ModalDetails from "@/components/common_components/ModalDetails";
import { useState } from "react";

const DB = [
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "false",
    image: "/assets/AdministrationMenu/chicken.svg",
  },
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "true",
    image: "/assets/AdministrationMenu/chicken.svg",
  },
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "false",
    image: "/assets/AdministrationMenu/chicken.svg",
  },
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "true",
    image: "/assets/AdministrationMenu/chicken.svg",
  },
  {
    nameDish: "Alitas",
    description:
      "Deliciosa orden de alitas empanizadas, aderezadas con toque de salsa especial, de la casa. Y aderezada de un queso Chedar",
    price: "50.50",
    isAvailable: "false",
    image: "/assets/AdministrationMenu/chicken.svg",
  },
];

export default function CustomerMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main>
      <TemplateMenu
        restaurantLogo="/assets/AdministrationMenu/RestaurantLogo.svg"
        userName="Jhon Doue"
        restauranName="Mr.Burguer"
      >
        <div id="entradas">
          <Category variant="customer" title="Entradas">
            {DB.map((data, idx) => (
              <SwiperSlide key={idx}>
                <CardAdministration
                  isAvailable={data.isAvailable}
                  nameDish={data.nameDish}
                  description={data.description}
                  price={data.price}
                  image={data.image}
                  variant="customerCard"
                  openModalDetail={() => setIsModalOpen(true)}
                />
              </SwiperSlide>
            ))}
          </Category>
        </div>

        <div id="bebidas">
          <Category variant="customer" title="Bebidas">
            {DB.map((data, idx) => (
              <SwiperSlide key={idx}>
                <CardAdministration
                  isAvailable={data.isAvailable}
                  nameDish={data.nameDish}
                  description={data.description}
                  price={data.price}
                  image={data.image}
                  variant="customerCard"
                />
              </SwiperSlide>
            ))}
          </Category>
        </div>
        <div id="postres">
          <Category variant="customer" title="Postres">
            {DB.map((data, idx) => (
              <SwiperSlide key={idx}>
                <CardAdministration
                  isAvailable={data.isAvailable}
                  nameDish={data.nameDish}
                  description={data.description}
                  price={data.price}
                  image={data.image}
                  variant="customerCard"
                />
              </SwiperSlide>
            ))}
          </Category>
        </div>

        <ModalDetails
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        ></ModalDetails>
      </TemplateMenu>
    </main>
  );
}
