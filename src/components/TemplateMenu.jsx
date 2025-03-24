import Image from "next/image";
import CategoriesButton from "@/components/administration_menu/CategoriesButton";
import SearchBar from "@/components/administration_menu/SearchBar";
import Cart from "./common_components/Cart";
export default function TemplateMenu({
  userName,
  restaurantLogo,
  restauranName,
  children,
}) {
  return (
    <main>
      <section className="flex h-[60px] w-full justify-center rounded-lg bg-cs200 md:h-[115px] lg:h-[145px]">
        <div className="w-full">
          <section>
            <div className="mt-8 flex items-end space-x-1 md:mt-14 lg:mt-11">
              {/* Logo */}
              <div className="w-20 md:w-[150px] lg:w-[200px]">
                <Image
                  width={30}
                  height={30}
                  alt="Logo restaurant"
                  src={restaurantLogo}
                  layout="responsive"
                />
              </div>

              <section className="flex w-full items-end justify-between">
                <section className="font-semibold">
                  <h1 className="font-poppins text-lg leading-7 tracking-tight text-cs900 md:text-[28px] lg:text-[40px]">
                    {restauranName}
                  </h1>
                  <h5 className="font-poppins text-xs text-black md:mt-1 md:text-lg lg:mt-2">
                    {` ¡Hola ${userName}, Bienvenido!`}
                  </h5>
                </section>
                <Cart />
              </section>
            </div>

            {/* Línea divisoria */}
            <div className="my-2 w-full border border-cs500"></div>
          </section>
          <div className="mb-1 lg:mb-3">
            <div className="md:flex md:flex-row-reverse md:gap-4">
              <div className="mb-3 w-full">
                <SearchBar />
              </div>
              <CategoriesButton names={["Entradas", "Bebidas", "Postres"]} />
            </div>
          </div>
          <div>{children}</div>

          <div className="h-5 md:h-10 lg:h-20"></div>
        </div>
      </section>
    </main>
  );
}
