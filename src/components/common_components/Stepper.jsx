import React from "react";
import {
  ShoppingCartIcon,
  CheckIcon,
  CreditCardIcon,
  ClipboardIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

export default function Stepper({ currentStep, type }) {
  const steps = [
    { id: 1, title: "Escoge tus productos", icon: ShoppingCartIcon },
    { id: 2, title: "Confirmación de cocina", icon: CheckIcon },
    { id: 3, title: "Método de pago", icon: CreditCardIcon },
    { id: 4, title: "Review", icon: ClipboardIcon },
    { id: 5, title: "Thank You", icon: HeartIcon },
  ];

  return (
    <section>
      {type === "restaurant" ? (
        <ol class="flex w-full items-center space-x-2 rounded-lg border bg-white p-3 text-center text-sm font-medium text-black shadow-sm sm:space-x-4 sm:p-4 sm:text-base rtl:space-x-reverse dark:text-gray-400">
          <li class="flex items-center text-black dark:text-cs500">
            <span class="me-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cs700 text-xs dark:border-cs700">
              1
            </span>
            Informacion{" "}
            <span class="hidden sm:ms-2 sm:inline-flex">personal</span>
            <svg
              class="ms-2 h-3 w-3 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li class="flex items-center">
            <span class="me-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 text-xs dark:border-gray-400">
              2
            </span>
            Account <span class="hidden sm:ms-2 sm:inline-flex">Info</span>
            <svg
              class="ms-2 h-3 w-3 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li class="flex items-center">
            <span class="me-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-500 text-xs dark:border-gray-400">
              3
            </span>
            Review
          </li>
        </ol>
      ) : (
        <div className="mx-auto flex max-w-[400px] justify-between md:max-w-[632px] lg:max-w-[830px]">
          {steps.map((step) => {
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            return (
              <section key={step.title} className="w-14 md:w-24 lg:w-40">
                <div className="flex flex-col items-center">
                  <div
                    className={`inline-block rounded-full border-2 p-2 ${
                      isActive
                        ? "border-cs500"
                        : isCompleted
                          ? "border-cs500"
                          : "border-black/50"
                    }`}
                  >
                    <step.icon
                      className={`h-5 w-5 md:h-7 md:w-7 ${
                        isActive
                          ? "text-cs700"
                          : isCompleted
                            ? "text-cs700"
                            : "text-black/50"
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                  <p className="text-center text-xs text-black/50 md:text-base lg:text-lg lg:font-medium">
                    {step.title}
                  </p>
                </div>
              </section>
            );
          })}
        </div>
      )}
    </section>
  );
}
