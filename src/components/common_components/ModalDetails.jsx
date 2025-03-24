import React, { useState } from "react";
import Image from "next/image";
import ButtonIncrease from "../administration_menu/ButtonIncrease";
import CheckRounded from "./CheckRounded";
import DescriptionBox from "./DescriptionBox";
import ButtonContained from "./ButtonContained";
import clsx from "clsx";
import { FireIcon, ClockIcon } from "@heroicons/react/24/solid";

const DB = [
  {
    ingredientesBase: [
      { ingredient: "Chile Jalapeño", isAvailable: false },
      { ingredient: "Queso", isAvailable: true },
      { ingredient: "Pepinillos", isAvailable: true },
      { ingredient: "Mostaza", isAvailable: true },
      { ingredient: "Salsa catsup", isAvailable: true },
      { ingredient: "Papas a la francesa", isAvailable: false },
    ],
  },
  {
    ingredientesExtra: [
      { ingredient: "Queso", isAvailable: true, price: "15" },
      { ingredient: "Tocino", isAvailable: false, price: "25" },
      { ingredient: "Aguacate", isAvailable: true, price: "5" },
    ],
  },
];

const ModalDetails = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-h-[90vh] w-full max-w-[744px] overflow-y-auto rounded-lg bg-white p-4 shadow">
        {/* Modal header */}
        <div className="flex items-center justify-end rounded-t border-b p-4">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-cs500 hover:text-white"
          >
            <svg
              className="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="w-full">
          <Image
            src="/assets/ModalDetails/HamburguerImage.svg"
            height={100}
            width={100}
            alt="dish Image"
            layout="responsive"
            className="rounded-3xl"
          />
        </div>

        <div className="p-4 md:p-5">
          <section className="flex justify-between">
            <h2 className="font-ubuntu text-2xl font-bold leading-tight tracking-tight text-black md:text-3xl">
              Hambuguesa con papas
            </h2>
            <ButtonIncrease />
          </section>

          <section className="my-2 flex justify-evenly font-ubuntu font-normal tracking-tight text-[#667473]">
            <div className="text-center">
              <p className="text-base leading-relaxed">Preparacion</p>
              <p className="flex items-center gap-1 text-sm leading-snug">
                <ClockIcon className="h-5 w-5 text-cs500" /> 30min
              </p>
            </div>

            <div className="text-center">
              <p className="text-base leading-relaxed">Calorias</p>
              <p className="flex items-center gap-1 text-sm leading-snug">
                <FireIcon className="h-5 w-5 text-cs500" /> 145 Kcal
              </p>
            </div>
          </section>

          <p className="w-full font-ubuntu text-sm font-normal leading-relaxed tracking-tight text-[#667473] md:text-base">
            Jugosa hamburguesa de res, servida en un pan suave con lechuga
            fresca, tomate, cebolla y queso derretido. Acompañada de crujientes
            papas fritas doradas al punto perfecto. ¡Un clásico irresistible!
          </p>

          <section className="mt-3">
            <h6 className="font-ubuntu text-base font-medium leading-7 tracking-tight md:text-lg">
              Ingredientes base
            </h6>
            <div className="flex flex-col gap-1">
              {DB[0].ingredientesBase.map((ingredient, idx) => {
                return (
                  <CheckRounded
                    key={idx}
                    isAvailable={ingredient.isAvailable}
                    labelText={ingredient.ingredient}
                  />
                );
              })}
            </div>
          </section>

          <div className="my-3 w-full border border-cs600"></div>

          <section className="mt-3">
            <h6 className="font-ubuntu text-base font-medium leading-7 tracking-tight md:text-lg">
              Ingredientes extra
            </h6>
            <div className="flex flex-col gap-1">
              {DB[1].ingredientesExtra.map((ingredient, idx) => {
                return (
                  <div key={idx} className="flex justify-between">
                    <CheckRounded
                      isAvailable={ingredient.isAvailable}
                      labelText={ingredient.ingredient}
                    />

                    <span
                      className={clsx(
                        "font-ubuntu text-sm font-bold leading-snug tracking-tight",
                        { "text-[#667473]": !ingredient.isAvailable },
                        { "text-cstext": ingredient.isAvailable },
                      )}
                    >
                      $ {ingredient.price} MXN
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
          <div className="mt-4">
            <DescriptionBox
              tailwindClasses="border-cs600 "
              labelText="Agregar notas"
              placeholder="Notas adicionales para el personal de cocina"
            />
          </div>
          <ButtonContained
            variant="generalPoppins"
            tailwindClasses="w-full bg-cs600 font-ubuntu"
            showIcon={true}
            isArrowLeft={false}
            type="submit"
            text="Agregar | $ 85"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
