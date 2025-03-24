import NavBar from "@/components/NavBar/NavBar";
import LayoutCard from "@/components/common_components/LayoutCard";
import CardContent from "@/components/UserOrder/CardContent";
import { SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import LayoutOrder from "@/components/UserOrder/LayoutOrder";
export default function ChooseProducts() {
  return (
    <main>
      <LayoutOrder
        title="¡Tu orden casi esta lista!"
        subtitle="Hecha un vistazo, que todo este en orden"
        linkForward="/check_Ingredients"
        linkBackward="/customer_menu"
      >
        <SwiperSlide>
          <LayoutCard>
            <CardContent />
          </LayoutCard>
        </SwiperSlide>
        <SwiperSlide>
          <LayoutCard>
            <CardContent />
          </LayoutCard>
        </SwiperSlide>
        <SwiperSlide>
          <LayoutCard>
            <CardContent />
          </LayoutCard>
        </SwiperSlide>
      </LayoutOrder>
    </main>
  );
}
