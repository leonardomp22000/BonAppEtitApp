import { MinusIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { useState } from "react";
export default function ButtonIncrease({ isAvailable }) {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <section className={clsx("", { "text-[#424949]": !isAvailable })}>
      <div
        className={clsx(
          "flex items-center gap-2 rounded-lg border-2 border-cs500 p-1 lg:px-2",
          { "border-[#D3D3D3]": !isAvailable },
        )}
      >
        <button onClick={handleDecrement}>
          <MinusIcon
            className={clsx(
              "h-3 w-3 text-cs500 hover:rounded-full hover:bg-cs100 active:bg-cs200 md:h-4 md:w-4 lg:h-5 lg:w-5",
              { "text-[#D3D3D3]": !isAvailable },
            )}
            strokeWidth={3}
          />
        </button>
        <span className="text-xs md:text-sm lg:text-base">{count}</span>

        <button onClick={handleIncrement}>
          <PlusIcon
            className={clsx(
              "h-3 w-3 text-cs500 hover:rounded-full hover:bg-cs100 active:bg-cs200 md:h-4 md:w-4 lg:h-5 lg:w-5",
              { "text-[#D3D3D3]": !isAvailable },
            )}
            strokeWidth={3}
          />
        </button>
      </div>
    </section>
  );
}
