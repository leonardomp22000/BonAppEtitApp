import Card from "@/components/restaurant_configuration/Card";
import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import MainLayout from "@/components/common_components/MainLayout";
import InputContained from "@/components/common_components/InputContained";
import UploadImageCard from "@/components/common_components/UploadImageCard";

const DB = [
  { titleInfo: "Nombre del restaurante", info: "Mr.burguer" },
  {
    titleInfo: "Direccion",
    info: "Av. Adolfo López Mateos Sur 2375, Plaza del Sol, 45050 Zapopan, Jal.",
  },
  { titleInfo: "Telefono", info: "22-54-56-78" },
  { titleInfo: "Correo electronico", info: "JohnDoue123@gmail.com" },
];
export default function RestauranConfiguration() {
  return (
    <main>
      <MainLayout>
        <section className="mb-5 flex items-center justify-start gap-4 lg:gap-8">
          <div className="w-[100px] md:w-[150px] lg:w-[150px]">
            <Image
              width={40}
              height={40}
              src="/assets/AdministrationMenu/RestaurantLogo.svg"
              alt="Logo restaurant"
              layout="responsive"
            ></Image>
          </div>
          <h1 className="font-poppins text-2xl font-medium text-black md:text-4xl lg:text-5xl">
            Mi restaurante
          </h1>
        </section>
        <section className="flex w-full flex-col items-center gap-2">
          {DB.map((module, idx) => (
            <Card key={idx} titleInfo={module.titleInfo} info={module.info}>
              <InputContained
                label={module.titleInfo}
                placeholder={module.info}
                type="text"
                variant="outlined"
              />
            </Card>
          ))}
          <Card titleInfo="Logo del restaurant" info="Image">
            <UploadImageCard text="Dale una nueva imagen a tu restaurante"></UploadImageCard>
          </Card>
        </section>
      </MainLayout>
    </main>
  );
}
