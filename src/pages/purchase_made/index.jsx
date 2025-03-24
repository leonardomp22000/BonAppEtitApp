import LayoutCard from "@/components/common_components/LayoutCard";
import CardContent from "@/components/UserOrder/CardContent";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import LayoutOrder from "@/components/UserOrder/LayoutOrder";

export default function PurchaseMade() {
  return (
    <main>
      <LayoutOrder
        title="¡Gracias por tu compra!"
        subtitle="En un momento un integrante de Mr. Burguer te llevara tu pedido"
        showLoadingButton={false}
        swiperContainer={false}
        showSingleButton={true}
        linkForward={"/customer_menu"}
      >
        <LayoutCard>
          <CardContent />
          <CardContent />
        </LayoutCard>
      </LayoutOrder>
    </main>
  );
}
