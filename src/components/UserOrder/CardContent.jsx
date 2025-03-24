import Image from "next/image";
import ButtonIncrease from "../administration_menu/ButtonIncrease";
import clsx from "clsx";

export default function CardContent({
  alt,
  src,
  price,
  deletedIngredients,
  extraIngredients,
  isAvailable = true,
}) {
  return (
    <section className="flex gap-2">
      <div className="h-auto w-[100px] flex-shrink-0 md:w-[220px]">
        <Image
          width={100}
          height={60}
          layout="responsive"
          alt="Hamburguer Image"
          src="/assets/userOrder/Hamburguer.svg"
          className={clsx("object-cover", {
            "saturate-0 filter": !isAvailable,
          })}
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-0">
        <h6
          className={clsx(
            "font-ubuntu text-base font-bold text-cs600 md:text-xl",
            { "text-[#B0B0B0]": !isAvailable },
          )}
        >
          Hamburguesa Sencilla
        </h6>
        <div
          className={clsx(
            "font-ubuntu text-sm leading-snug tracking-tight text-[#272727] md:text-lg",
            { "text-[#A8A8A8]": !isAvailable },
          )}
        >
          <span className="font-normal">$</span>
          <span className="font-bold">145.00 </span>
          <span className="font-normal">MXN</span>
        </div>
        <div className="flex flex-col gap-2 font-ubuntu text-xs font-normal leading-3 tracking-tight text-black/50 md:text-base">
          <p>
            Eliminas los siguientes ingredientes: Chile Jalapeño, Catsup,
            Mostaza.
          </p>
          <p>Ingredientes extra: Queso, Tocino, Aguacate.</p>
        </div>
        <div className="flex justify-end">
          <ButtonIncrease isAvailable={isAvailable}></ButtonIncrease>
        </div>
      </div>
    </section>
  );
}
