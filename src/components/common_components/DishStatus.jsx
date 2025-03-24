import SwitchLabel from "./Switch";

export default function DishStatus() {
  return (
    <section>
      <table className="w-full">
        <thead>
          <tr>
            <th
              className="px-4 py-2 text-center font-poppins text-sm font-medium text-gray-700"
              colSpan={2}
            >
              Status del platillo
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b border-gray-200 font-poppins text-sm">
            <td className="px-4 py-2">Visible</td>
            <td className="flex justify-center px-4 py-2 text-right">
              <SwitchLabel />
            </td>
          </tr>

          <tr className="border-b border-gray-200 font-poppins text-sm">
            <td className="px-4 py-2">Disponible</td>
            <td className="flex justify-center px-4 py-2 text-right">
              <SwitchLabel />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
