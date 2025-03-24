import NavBar from "@/components/NavBar/NavBar";
import LayoutCard from "@/components/common_components/LayoutCard";
import CardContent from "@/components/UserOrder/CardContent";
import { SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import LayoutOrder from "@/components/UserOrder/LayoutOrder";
import Card from "@/components/restaurant_configuration/Card";

export default function Review() {
  return (
    <main>
      <LayoutOrder
        title="¡Estas a un paso de completar tu orden!"
        subtitle="Revisa que los productos y el metodo de pago sean correctos."
        showLoadingButton={false}
        swiperContainer={false}
        linkBackward={"/payment_method"}
        linkForward={"/purchase_made"}
      >
        <LayoutCard>
          <CardContent />
          <CardContent />
        </LayoutCard>

        <div className="gap flex">
          <Card
            showIcon={true}
            titleInfo="Pago con efectivo "
            info="Pagar con efectivo"
            iconSrc="/assets/PaymentMethod/cashOutline.svg"
            isCashCard={true}
          />
        </div>
      </LayoutOrder>
    </main>
  );
}
