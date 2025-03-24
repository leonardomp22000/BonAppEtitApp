import LayoutCard from "@/components/common_components/LayoutCard";
import CardContent from "@/components/UserOrder/CardContent";
import { SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import LayoutOrder from "@/components/UserOrder/LayoutOrder";

export default function CheckIngredients() {
  return (
    <main>
      <LayoutOrder
        title="¡Tu orden casi esta lista!"
        subtitle="Estamos comprobando todos los ingredientes..."
        showLoadingButton="true"
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
