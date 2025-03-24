import React, { useState } from "react";
import SwitchLabel from "./Switch"; // Asegúrate de tener tu componente Switch
import MenuMobile from "../NavBar/MenuMobile"; // Asegúrate de tener tu componente MenuButton
import { TrashIcon, EyeIcon } from "@heroicons/react/24/solid";

const IngredientsTable = () => {
  const [ingredients, setIngredients] = useState([
    { name: "papas", status: true },
  ]);

  // Agregar una nueva fila con valores predeterminados
  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", status: false }]);
  };

  // Manejar cambio de nombre del ingrediente
  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].name = value;
    setIngredients(updatedIngredients);
  };

  // Manejar cambio del switch
  const handleStatusChange = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].status = !updatedIngredients[index].status;
    setIngredients(updatedIngredients);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-0 py-2 text-center font-poppins text-sm font-medium text-gray-700">
              Ingrediente base
            </th>
            <th className="px-0 py-2 text-center font-poppins text-sm font-medium text-gray-700">
              Status (disponible)
            </th>
            <th className="px-0 py-2 text-sm font-medium text-gray-700"></th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="px-4 py-2">
                {ingredient.name || index === ingredients.length - 1 ? (
                  <input
                    type="text"
                    value={ingredient.name}
                    onChange={(e) =>
                      handleIngredientChange(index, e.target.value)
                    }
                    placeholder="Escribe el nombre del ingrediente"
                    className="w-full rounded-md border border-gray-300 px-2 py-1 font-poppins text-sm"
                  />
                ) : (
                  <span className="text-sm">{ingredient.name}</span>
                )}
              </td>
              <td className="flex justify-center px-4 py-2">
                <SwitchLabel
                  isChecked={ingredient.status}
                  onChange={() => handleStatusChange(index)}
                />
              </td>
              <td className="px-0 py-2 text-start">
                <MenuMobile
                  variant="table"
                  items={[
                    {
                      text: "Eliminar",
                      icon: <TrashIcon className="h-5 w-5" />,
                    },
                    { text: "Visible", icon: <EyeIcon className="h-5 w-5" /> },
                  ]}
                />
              </td>
            </tr>
          ))}

          <tr className="border-b border-gray-200">
            <td colSpan={1} className="px-4 py-2 text-left">
              <button
                type="button"
                onClick={addIngredient}
                className="rounded-xl bg-cs500 px-3 py-2 font-poppins text-xs font-semibold text-white hover:bg-cs600"
                disabled={
                  ingredients.length === 0 ||
                  ingredients[ingredients.length - 1].name === ""
                }
              >
                Agregar ingrediente
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IngredientsTable;
