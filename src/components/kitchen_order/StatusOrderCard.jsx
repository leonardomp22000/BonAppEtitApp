import clsx from "clsx";
import LayoutCard from "../common_components/LayoutCard";

export default function StatusOrder({ children, status, quantity }) {
  return (
    <section className="mb-6 w-full">
      <div className="mb-2">
        <LayoutCard
          tailwindClasses={clsx(
            "",
            { "!bg-cs500": status === "active" },
            { "!bg-cs600": status === "process" },
            { "!bg-cs700": status === "done" },
          )}
        >
          <h3 className="text-center font-poppins text-2xl font-semibold text-white md:text-4xl">
            {status === "active"
              ? "Activo"
              : status === "process"
                ? "En proceso"
                : "Completado"}{" "}
          </h3>
        </LayoutCard>
      </div>
      {children}
    </section>
  );
}
