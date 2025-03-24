export default function DescriptionBox({
  tailwindClasses,
  labelText = "",
  placeholder = "",
}) {
  return (
    <div class="mb-4">
      <label
        for="descripcion"
        class="block font-ubuntu text-base font-medium leading-5 tracking-tight text-black"
      >
        {labelText}
      </label>
      <textarea
        id="descripcion"
        name="descripcion"
        rows="4"
        class={`mt-1 block w-full rounded-md border border-cs400 p-2 font-ubuntu text-xs text-black placeholder:text-sm placeholder:text-black/50 focus-within:border-transparent focus:outline-none focus:ring-2 focus:ring-cs500 md:text-base ${tailwindClasses}`}
        placeholder={placeholder}
      />
    </div>
  );
}
