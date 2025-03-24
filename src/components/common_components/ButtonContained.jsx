import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";
import ArrowWrapper from "./ArrowWrapper";

export default function ButtonContained({
  text,
  type,
  tailwindClasses,
  showIcon,
  variant,
  isArrowLeft = false,
  ...props
}) {
  return (
    <main>
      {variant === "generalPoppins" && (
        <button
          type={type}
          {...props}
          className={`flex items-center justify-center rounded-lg bg-cs500 px-3 py-2 font-poppins text-sm font-semibold text-white shadow-md transition-all duration-150 ease-in-out hover:bg-cs700 hover:shadow-2xl active:bg-cs900 active:shadow-none md:text-base lg:text-lg ${tailwindClasses}`}
        >
          {showIcon ? (
            <ArrowWrapper isLeft={isArrowLeft}>{text}</ArrowWrapper>
          ) : (
            <span>{text}</span>
          )}
        </button>
      )}
      {variant === "text" && (
        <button
          type={type}
          {...props}
          className={`flex items-center justify-center rounded-lg bg-white px-3 py-2 font-poppins text-sm font-semibold text-cs500 shadow-md transition-all duration-150 ease-in-out hover:bg-cs700 hover:shadow-2xl active:bg-cs900 active:shadow-none md:text-base lg:text-lg ${tailwindClasses}`}
        >
          {showIcon && <ArrowLeftIcon className="ml-2 h-5 w-5" />}
          <span>{text}</span>
        </button>
      )}
      {variant === "generalUbuntu" && (
        <button
          type={type}
          text="Editar producto"
          {...props}
          className={`mx-auto rounded-[8px] bg-cs500 px-[4px] py-[7px] font-ubuntu text-[10px] font-medium text-white shadow-md transition-all duration-150 ease-in-out hover:bg-cs700 hover:shadow-2xl active:bg-cs900 active:shadow-none md:text-sm lg:text-base ${tailwindClasses}`}
        >
          <span>{text}</span>
        </button>
      )}
    </main>
  );
}
