import LayoutCard from "../LayoutCard";
import { QrCodeIcon, CloudArrowDownIcon } from "@heroicons/react/24/outline";
import SwitchLabel from "../Switch";
import ButtonDeleted from "@/components/administration_menu/ButtonDeleted";
export default function QRCard() {
  return (
    <section className="min-w-[160px] max-w-[196px] md:min-w-[200px] lg:min-w-[250px]">
      <LayoutCard>
        <div className="relative">
          <div className="absolute right-0">
            <ButtonDeleted></ButtonDeleted>
          </div>
        </div>

        <h2 className="text-center font-poppins text-xl font-semibold text-cstext md:text-2xl">
          Mesa 1
        </h2>

        <div className="mx-auto w-[100px]">
          <QrCodeIcon></QrCodeIcon>
        </div>

        <div className="flex items-center justify-evenly">
          <button>
            <LayoutCard tailwindClasses="inline-block !p-2">
              <CloudArrowDownIcon className="w-8 text-cs500" strokeWidth={2} />
            </LayoutCard>
          </button>
          <button>
            <LayoutCard tailwindClasses="inline-block !p-2">
              <SwitchLabel />
            </LayoutCard>
          </button>
        </div>
      </LayoutCard>
    </section>
  );
}
