import React, { useState } from "react";
import UploadImageCard from "./UploadImageCard";
import InputContained from "./InputContained";
import DescriptionBox from "./DescriptionBox";
import Card from "../restaurant_configuration/Card";
import Checkbox from "./Checkbox";
import IngredientsTable from "./IngredientsTable";
import DishStatus from "./DishStatus";
import LayoutCard from "./LayoutCard";
import ButtonContained from "./ButtonContained";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 right-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-h-[80vh] w-full max-w-[744px] overflow-y-auto rounded-lg bg-white p-4 shadow">
        {/* Modal header */}
        <div className="flex items-center justify-between rounded-t border-b p-4">
          <h3 className="font-ubuntu text-3xl font-semibold text-cstext">
            Platillos
          </h3>
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

        {/* Modal body */}
        <form className="p-4 md:p-5">
          <section className="lg:flex lg:gap-4">
            <UploadImageCard text="Añade una imagen a tu platillo!"></UploadImageCard>
            <div>
              <InputContained
                label="Nombre del platillo"
                type="text"
                variant="outlined"
                placeholder="Hamburguesa"
              />
              <InputContained
                label="Precio"
                type="text"
                variant="outlined"
                placeholder="$85"
              />
              <InputContained
                label="Tiempo estimado de preparación"
                type="text"
                variant="outlined"
                placeholder="30min"
              />
              <InputContained
                label="kCal"
                type="text"
                variant="outlined"
                placeholder="180kCal"
              />
            </div>
          </section>

          <DishStatus></DishStatus>

          <DescriptionBox></DescriptionBox>
          <section className="flex flex-col gap-3">
            <Card
              tailwindClasses={"!px-0"}
              titleInfo={<Checkbox labelText="Ingredientes base" />}
            >
              <IngredientsTable></IngredientsTable>
            </Card>

            <Card
              tailwindClasses={"!px-0"}
              titleInfo={<Checkbox labelText="Ingredientes extra" />}
            >
              <IngredientsTable></IngredientsTable>
            </Card>

            <div className="mt-4 px-1">
              <div className="my-3 flex w-full justify-between md:justify-end md:gap-7">
                <ButtonContained
                  variant="generalPoppins"
                  text="Guardar cambios"
                />
                <ButtonContained variant="text" text="Descartar" />
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Modal;
