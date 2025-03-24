export default function ButtonOutlined({ variant, text, type, ...props }) {
  return (
    <section>
      {variant === "dashed" && (
        <button
          type={type}
          {...props}
          className="rounded-lg border-2 border-dashed border-cs300 bg-cs50 px-6 py-1 font-roboto text-[10px] font-normal leading-tight tracking-tight text-cs500 hover:bg-cs100 active:text-cs900 md:text-sm lg:text-base"
        >
          {text}
        </button>
      )}
    </section>
  );
}
