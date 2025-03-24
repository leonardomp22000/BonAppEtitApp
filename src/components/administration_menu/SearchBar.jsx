import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function SearchBar() {
  return (
    <section>
      <div className="flex w-full items-center gap-2 rounded-lg border-2 border-cs500 px-3 py-1">
        <MagnifyingGlassIcon
          className="h-4 w-4 text-cs500 lg:h-5 lg:w-5"
          strokeWidth={2}
        />
        <input
          className="flex-1 font-poppins text-xs focus:outline-none"
          placeholder="Buscar platillo"
          type="text"
        />
      </div>
    </section>
  );
}
