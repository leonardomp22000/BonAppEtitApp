import Image from "next/image";
import ButtonContained from "@/components/common_components/ButtonContained";
export default function Error() {
  return (
    <main>
      <section className="mt-6 flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-center font-poppins text-[42px] font-black leading-none text-black md:text-[50px] lg:text-[64px]">
              Oops! <br /> Error 404
            </h1>
            <h2 className="font-poppins text-[28px] text-lg font-bold text-black lg:text-3xl">
              ¡Parece que estas perdido!
            </h2>
          </div>

          <div className="mx-auto mb-7 h-auto max-w-[320px] md:max-w-[600px] lg:mb-14 lg:w-[700px]">
            <Image
              src="/assets/NotFound/notFound.svg"
              alt="Not found Image"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>

          <ButtonContained
            text="Ir a inicio"
            variant="generalPoppins"
            showIcon={true}
            isArrowLeft={true}
          />
        </div>
      </section>
    </main>
  );
}
