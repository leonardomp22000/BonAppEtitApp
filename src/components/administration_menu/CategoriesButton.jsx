import Link from "next/link";

export default function CategoriesButton({ names }) {
  return (
    <div className="flex">
      {names.map((name, index) => (
        <Link
          key={index}
          href={`#${name.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex h-[26px] items-center justify-center rounded border border-cs500 bg-white px-2 py-1 text-cstext shadow-md transition-all duration-150 ease-in-out hover:text-cs500 hover:shadow-2xl active:text-cs500 active:shadow-none lg:px-3 lg:py-4"
        >
          <span className="font-poppins text-xs font-semibold lg:text-base">
            {name}
          </span>
        </Link>
      ))}
    </div>
  );
}
