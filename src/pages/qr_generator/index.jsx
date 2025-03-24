import InputContained from "@/components/common_components/InputContained";
import ButtonContained from "@/components/common_components/ButtonContained";
import QRCard from "@/components/common_components/QRGenerator/QRCard";

export default function QRGenerator() {
  return (
    <main>
      <div>
        <h1 className="font-poppins text-[28px] font-semibold text-cstext md:text-4xl lg:text-5xl">
          Generador QR
        </h1>
        <h4 className="font-poppins text-xl font-medium text-cstext md:text-2xl">
          Genera los QR necesarios para tu restaurante
        </h4>
      </div>

      <div className="lg:flex lg:justify-between">
        <div className="flex max-w-[400px] items-end justify-between md:max-w-[700px] lg:space-x-7">
          <div className="max-w-[210px] md:max-w-[500px]">
            <InputContained
              variant="outlined"
              placeholder="Ingresa el numero de mesas"
              label="No.Mesas"
            />
          </div>
          <div className="shrink-0">
            <ButtonContained text="Generar QR" variant="generalPoppins" />
          </div>
        </div>

        <div className="sm:hidden md:hidden lg:flex lg:items-end lg:gap-7">
          <ButtonContained variant="text" text="Descartar" />
          <ButtonContained variant="generalPoppins" text="Guardar" />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap justify-evenly gap-2 lg:mt-8">
        <QRCard className="flex-grow" />
        <QRCard className="flex-grow" />
        <QRCard className="flex-grow" />
        <QRCard className="flex-grow" />
        <QRCard className="flex-grow" />
        <QRCard className="flex-grow" />
        <QRCard className="flex-grow" />
        <QRCard className="flex-grow" />
      </div>

      <div className="mt-6 flex items-end justify-end gap-7 lg:hidden">
        <ButtonContained variant="text" text="Descartar" />
        <ButtonContained variant="generalPoppins" text="Guardar" />
      </div>
    </main>
  );
}
