import { XMarkIcon } from "@heroicons/react/24/outline";
export default function ButtonDeleted({ props }) {
  return (
    <button
      type="button"
      {...props}
      className="w-6 rounded-full bg-[#e01e1e] p-1 hover:bg-cs600 active:bg-cs700 lg:w-7"
    >
      <span>
        <XMarkIcon
          strokeWidth={2}
          className="h-4 w-4 text-black lg:h-5 lg:w-5"
        ></XMarkIcon>
      </span>
    </button>
  );
}
