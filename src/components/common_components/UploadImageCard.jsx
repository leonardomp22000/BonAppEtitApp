import ButtonOutlined from "@/components/ButtonOutlined";
import { CloudArrowUpIcon } from "@heroicons/react/20/solid";
export default function UploadImageCard({ text }) {
  return (
    <section className="mx-auto flex w-full items-center justify-center rounded-lg border-2 border-dashed border-cs500 px-7 py-3 md:w-[500px] md:px-14 md:py-2">
      <div className="flex flex-col items-center gap-1">
        <CloudArrowUpIcon className="h-auto w-9 text-cs500 md:w-12"></CloudArrowUpIcon>
        <p className="text-center font-poppins text-sm font-bold leading-relaxed tracking-wide text-cs900 md:text-base">
          {text}
        </p>
        <ButtonOutlined variant="dashed" text="Cargar imagen"></ButtonOutlined>
      </div>
    </section>
  );
}
