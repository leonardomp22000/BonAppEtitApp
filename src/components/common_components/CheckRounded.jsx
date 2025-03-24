import React, { useState } from "react";
import LabelStatus from "../administration_menu/LabelStatus";
import clsx from "clsx";

export default function CheckRounded({ labelText, isAvailable }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
  };

  return (
    <div className="flex items-center">
      {/* El checkbox */}
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={!isAvailable}
        className="h-5 w-5 appearance-none rounded-full border-2 border-gray-300 checked:bg-orange-600 focus:ring-0"
      />
      {/* El label */}
      <label
        htmlFor="checkbox"
        className={clsx(
          "font-ubuntu text-sm font-normal leading-snug tracking-tight md:text-base",
          { "text-black/50": !isAvailable, "text-cstext": isAvailable },
        )}
      >
        <span className="ml-2 mr-3">{labelText}</span>
        {isAvailable === false && <LabelStatus isAvailable={isAvailable} />}
      </label>
    </div>
  );
}
