import Image from "next/image";
export default function ButtonUserTypeCard({ userType }) {
  return (
    <button className="rounded-3xl px-3 pb-5 shadow hover:bg-black/5 active:bg-black/10">
      <section className="flex justify-center">
        <div className="h-auto w-[100px] md:w-[150px] lg:w-[250px]">
          <Image
            src={
              userType === "restaurant"
                ? "/assets/userType/restaurant.svg"
                : "/assets/userType/dishSalad.svg"
            }
            alt={
              userType === "restaurant" ? "RestaurantImage" : "dishSaladImage"
            }
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </section>
      <h3 className="font-poppins text-base font-medium text-black md:text-lg lg:text-3xl">
        {userType === "restaurant" ? "Soy un restaurante" : "Soy un comensal"}
      </h3>
      <p className="font-poppins text-xs font-normal text-black md:text-sm lg:text-xl">
        {userType === "restaurant"
          ? "Administra tu menu digital, gestiona tus mesas y recibe pedidos"
          : "Escanea el QR de la mesa y ordena directamente desde tu dispositivo."}
      </p>
    </button>
  );
}
