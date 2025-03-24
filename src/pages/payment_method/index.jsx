import NavBar from "@/components/NavBar/NavBar";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import LayoutOrder from "@/components/UserOrder/LayoutOrder";
import Card from "@/components/restaurant_configuration/Card";
import InputContained from "@/components/common_components/InputContained";

export default function PaymentMethod() {
  return (
    <main>
      <LayoutOrder
        swiperContainer="false"
        title="Metodo de pago "
        subtitle="Escoge tu metodo de pago."
        linkForward={"/review"}
        linkBackward={"/choose_products"}
      >
        <div className="flex flex-col gap-4">
          <div className="gap flex">
            <Card
              showIcon={true}
              titleInfo="Pago con tarjeta"
              info="Agregar tarjeta"
              iconSrc="/assets/PaymentMethod/cardOutline.svg"
            >
              <div className="px-1">
                <InputContained
                  label="Nombre del titular"
                  placeholder="Nombre del titular"
                  variant="outlined"
                ></InputContained>
                <div className="flex gap-20">
                  <InputContained
                    label="Expiracion"
                    placeholder="MM / YY"
                    variant="outlined"
                  ></InputContained>
                  <InputContained
                    label="CVV"
                    placeholder="***"
                    variant="outlined"
                  ></InputContained>
                </div>
                <InputContained
                  label="No.Tarjeta"
                  placeholder="0000 0000 0000 0000"
                  variant="outlined"
                ></InputContained>
              </div>
            </Card>
          </div>
          <div className="gap flex">
            <Card
              showIcon={true}
              titleInfo="Pago con efectivo "
              info="Pagar con efectivo"
              iconSrc="/assets/PaymentMethod/cashOutline.svg"
              isCashCard={true}
            />
          </div>
        </div>
      </LayoutOrder>
    </main>
  );
}
