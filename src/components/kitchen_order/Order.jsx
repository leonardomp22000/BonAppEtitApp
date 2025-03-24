import LayoutCard from "../common_components/LayoutCard";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function Order({
  baseIgredients,
  extraIngredients,
  time,
  table,
  dishName,
}) {
  return (
    <LayoutCard>
      <h6 className="text-end font-ubuntu text-base font-normal leading-none tracking-tight text-black md:text-xl">
        Mesa #{table}
      </h6>
      <div className="flex items-center gap-1">
        <ClockIcon className="h-5 w-5" />
        <p className="font-poppins text-sm font-semibold text-black md:text-base">
          Ordenado hace {time} minutos
        </p>
      </div>
      <h3 className="font-ubuntu text-xl font-bold text-cs500 md:text-[28px]">
        {dishName}
      </h3>
      <section className="mt-2 flex flex-col gap-2 font-ubuntu text-base font-normal leading-none tracking-tight md:text-lg">
        <div className="flex gap-1">
          <p>Ingredientes base:</p>
          <span className="text-black/50">{baseIgredients}</span>
        </div>
        <div className="flex gap-1">
          <p>Ingredientes extra:</p>
          <span className="text-black/50">{extraIngredients}</span>
        </div>
      </section>
    </LayoutCard>
  );
}
