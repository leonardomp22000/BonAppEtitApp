import LayoutCard from "@/components/common_components/LayoutCard";
import CardContent from "@/components/UserOrder/CardContent";
import { SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import LayoutOrder from "@/components/UserOrder/LayoutOrder";

export default function CheckIngredients() {
  return (
    <main>
      <LayoutOrder
        title="Orden incompleta"
        subtitle="Algunos platillos no se encuentran disponibles, disculpa las molestias."
      >
        <SwiperSlide>
          <LayoutCard>
            <CardContent isAvailable={false} />
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
        <SwiperSlide>
          <LayoutCard>
            <CardContent />
          </LayoutCard>
        </SwiperSlide>
      </LayoutOrder>
    </main>
  );
}
