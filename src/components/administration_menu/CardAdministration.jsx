import Image from "next/image";
import ButtonContained from "../common_components/ButtonContained";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import ButtonOutlined from "../ButtonOutlined";
import LabelStatus from "./LabelStatus";
import ButtonDeleted from "./ButtonDeleted";
import ButtonIncrease from "./ButtonIncrease";

export default function CardAdministration({
  variant,
  isAvailable,
  nameDish,
  description,
  price,
  image,
  openModal,
  openModalDetail,
}) {
  return (
    <section className="m-3">
      {variant === "editCard" && (
        <div className="w-[160px] transform rounded-b-2xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg md:w-[230px] lg:w-[280px]">
          <section className="hover:bg-slate-100">
            <div className="relative w-full">
              <Image
                className="rounded-t-2xl"
                width={40}
                height={40}
                alt="chicken"
                src={image}
                layout="responsive"
              />
              <div className="absolute top-3 w-full px-2 lg:top-4 lg:px-3">
                <div className="flex justify-between">
                  {isAvailable === "false" ? (
                    <LabelStatus isAvailable={false} />
                  ) : (
                    <LabelStatus isAvailable={true} />
                  )}
                  <ButtonDeleted></ButtonDeleted>
                </div>
              </div>
            </div>

            <div className="p-1 lg:p-2">
              <h6 className="mb-1 font-ubuntu text-sm font-bold text-cs600 md:text-base lg:text-xl">
                {nameDish}
              </h6>
              <p className="line-clamp-3 font-ubuntu text-[10px] font-normal leading-tight text-[#667473] md:text-xs lg:text-sm">
                {description}
              </p>
              <div className="flex h-[25px] items-center">
                <span className="mr-1 font-ubuntu text-xs font-medium text-[#424949] lg:text-sm">
                  $
                </span>
                <span className="mr-1 font-ubuntu text-sm font-bold tracking-tight text-[#242828] md:text-sm lg:text-xl">
                  {price}
                </span>
                <span className="text-ce font-ubuntu text-[10px] font-medium text-[#424949] lg:text-sm">
                  MXN
                </span>
              </div>
            </div>
          </section>

          <div className="flex justify-center">
            <ButtonContained
              variant="generalUbuntu"
              text="Editar platillo"
              type="button"
              onClick={openModal}
            ></ButtonContained>
          </div>
          <div className="mt-2 flex h-[20px] items-center justify-center rounded-b-2xl bg-cs200 text-[10px] font-medium text-cs900 md:text-xs lg:h-[24px] lg:text-sm">
            <p>Detalles del producto</p>
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </div>
        </div>
      )}

      {variant === "AddCard" && (
        <div className="h-[224px] w-[160px] transform rounded-lg border-2 border-dashed border-cs300 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg md:h-[276px] md:w-[230px] lg:h-[331px] lg:w-[280px]">
          <section className="hover:bg-slate-100">
            <div className="flex w-full items-center justify-center rounded-lg border-b-2 border-dashed border-cs300 bg-cs50 py-5 lg:py-8">
              <div className="h-auto w-8 md:w-16">
                <Image
                  className="rounded-t-2xl"
                  width={40}
                  height={40}
                  alt="chicken"
                  src={"/assets/AdministrationMenu/PhotoOutlined.svg"}
                  layout="responsive"
                />
              </div>
            </div>

            <div className="flex h-36 items-end justify-center px-4 py-6 md:h-40 lg:h-48">
              <ButtonOutlined
                variant="dashed"
                text="Agregar platillo"
                type="button"
                onClick={openModal}
              />
            </div>
          </section>
        </div>
      )}
      {variant === "customerCard" && (
        <div className="w-[160px] transform rounded-b-2xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg md:w-[230px] lg:w-[280px]">
          <section className="hover:bg-slate-100">
            <div className="relative w-full">
              <Image
                className="rounded-t-2xl"
                width={40}
                height={40}
                alt="chicken"
                src={image}
                layout="responsive"
              />
              <div className="absolute top-3 w-full px-2 lg:top-4 lg:px-3">
                <div className="flex justify-between">
                  {isAvailable === "false" && <LabelStatus />}
                  <ButtonDeleted />
                </div>
              </div>
            </div>

            <div className="p-1 lg:p-2">
              <h6 className="mb-1 font-ubuntu text-sm font-bold text-cs600 md:text-base lg:text-xl">
                {nameDish}
              </h6>
              <p className="line-clamp-3 font-ubuntu text-[10px] font-normal leading-tight text-[#667473] md:text-xs lg:text-sm">
                {description}
              </p>
              <div className="flex h-[25px] items-center">
                <span className="mr-1 font-ubuntu text-xs font-medium text-[#424949] lg:text-sm">
                  $
                </span>
                <span className="mr-1 font-ubuntu text-sm font-bold tracking-tight text-[#242828] md:text-sm lg:text-xl">
                  {price}
                </span>
                <span className="text-ce font-ubuntu text-[10px] font-medium text-[#424949] lg:text-sm">
                  MXN
                </span>
              </div>
            </div>
          </section>

          <div className="flex items-center justify-evenly">
            <ButtonIncrease />
            <ButtonContained
              variant="generalUbuntu"
              text="Comprar ahora"
              type="submit"
              onClick={openModalDetail}
            />
          </div>
          <div className="mt-2 flex h-[20px] items-center justify-center rounded-b-2xl bg-cs200 text-[10px] font-medium text-cs900 md:text-xs lg:h-[24px] lg:text-sm">
            <p>Detalles del producto</p>
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </div>
        </div>
      )}
    </section>
  );
}
