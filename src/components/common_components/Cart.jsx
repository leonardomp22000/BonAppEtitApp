import { ShoppingCartIcon } from "@heroicons/react/24/solid";
export default function Cart() {
  return (
    <section>
      <button>
        <ShoppingCartIcon className="h-5 w-5 text-cs800 md:h-7 md:w-7 lg:h-8 lg:w-8" />
      </button>
    </section>
  );
}
