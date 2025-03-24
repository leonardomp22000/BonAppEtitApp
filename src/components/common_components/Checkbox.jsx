import React, { useState } from "react";

export default function Checkbox({ labelText, onChange }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className="flex items-center">
      {/* El checkbox */}
      <input
        type="checkbox"
        id="checkbox"
        checked={checked}
        onChange={handleChange}
        className="h-4 w-4 rounded-md border-2 border-gray-300 checked:bg-orange-500 focus:ring-0"
      />
      {/* El label */}
      <label
        htmlFor="checkbox"
        className="ml-2 font-poppins text-sm text-cstext"
      >
        {labelText}
      </label>
    </div>
  );
}
