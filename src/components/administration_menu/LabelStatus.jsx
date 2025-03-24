import clsx from "clsx";

export default function LabelStatus({ isAvailable, props }) {
  return (
    <button
      {...props}
      className={clsx("inline-flex rounded-full px-4 py-1 hover:bg-cs700", {
        "bg-[#e60000] active:bg-cs800": !isAvailable, // Agotado: rojo
        "bg-green-700 hover:bg-green-800 active:bg-green-900": isAvailable, // Disponible: verde
      })}
    >
      <span className="font-ubuntu text-xs font-bold text-white lg:text-sm">
        {isAvailable ? "Disponible" : "Agotado"}
      </span>
    </button>
  );
}
