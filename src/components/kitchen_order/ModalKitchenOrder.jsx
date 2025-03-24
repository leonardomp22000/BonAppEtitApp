import React, { useState } from "react";
import Image from "next/image";
import CheckRounded from "../common_components/CheckRounded";
import ButtonContained from "../common_components/ButtonContained";
import clsx from "clsx";

const DB = [
  {
    ingredientesBase: [
      { ingredient: "Queso", isAvailable: true },
      { ingredient: "Mostaza", isAvailable: true },
      { ingredient: "Salsa catsup", isAvailable: true },
      { ingredient: "Papas a la francesa", isAvailable: false },
    ],
  },
  {
    ingredientesExtra: [
      { ingredient: "Queso", isAvailable: true, price: "15" },
    ],
  },
];

const ModalKitchenOrder = ({ isOpen, onClose, orderData }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-h-[90vh] w-full max-w-[744px] overflow-y-auto rounded-lg bg-white p-4 shadow">
        {/* Modal header */}
        <div className="flex items-center justify-between rounded-t border-b px-4 py-2">
          <div className="rounded-[20px] bg-cs500 px-4 py-2">
            <h3 className="font-poppins text-base font-semibold text-white">
              {orderData.status === "active"
                ? "Activo"
                : orderData.status === "process"
                  ? "En preparacion"
                  : "Completado"}
            </h3>
          </div>

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
              {orderData.dishName}
            </h2>
            <span className="shrink-0 font-ubuntu text-lg font-bold">
              Mesa #{orderData.table}
            </span>
          </section>

          <p className="w-full rounded-lg font-ubuntu text-sm font-normal leading-relaxed tracking-tight text-[#667473] md:text-base">
            {orderData.description || "Sin comentarios"}
            {/* Ajusta según tus datos */}
          </p>

          <section className="mt-3">
            <h6 className="font-ubuntu text-base font-medium leading-7 tracking-tight md:text-lg">
              Ingredientes base
            </h6>
            <div className="flex flex-col gap-1">
              {orderData.baseIngredients.map((ingredient, idx) => {
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

          <div className="my-3 w-full border border-cs500"></div>

          <section className="my-3">
            <h6 className="font-ubuntu text-base font-medium leading-7 tracking-tight md:text-lg">
              Ingredientes extra
            </h6>
            <div className="flex flex-col gap-1">
              {orderData.extraIngredients.map((ingredient, idx) => {
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

          <section className="flex justify-evenly">
            <ButtonContained
              variant="generalPoppins"
              tailwindClasses=""
              type="submit"
              text="Preparar"
            />

            <ButtonContained
              variant="text"
              tailwindClasses=""
              type="submit"
              text="Rechazar"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ModalKitchenOrder;
