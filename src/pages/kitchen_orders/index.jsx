import Order from "@/components/kitchen_order/Order";
import StatusOrderCard from "@/components/kitchen_order/StatusOrderCard";
import { useEffect, useState } from "react";
import ModalKitchenOrder from "@/components/kitchen_order/ModalKitchenOrder";

export default function KitchenOrders() {
  const [ordersData, setOrdersData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/kitchenOrders");
        if (!response.ok) throw new Error("Error al obtener los datos");
        const data = await response.json();
        setOrdersData(data);
      } catch (error) {
        console.error("Error al cargar los datos", error);
      }
    };
    fetchOrders();
  }, []);

  const handleCardClick = (order, status) => {
    setSelectedOrder({ ...order, status });
    setIsModalOpen(true);
  };

  return (
    <main>
      <div className="flex flex-col gap-4 lg:flex-row">
        {ordersData.map((statusData, index) => (
          <StatusOrderCard key={index} status={statusData.status}>
            {statusData.orders.map((order, idx) => (
              <div
                onClick={() => handleCardClick(order, statusData.status)}
                className="mb-3"
                key={idx}
              >
                <Order
                  dishName={order.dishName}
                  table={order.table}
                  time={order.time}
                  baseIgredients={order.baseIngredients
                    .map((ingredient) => ingredient.ingredient)
                    .join(", ")}
                  extraIngredients={order.extraIngredients
                    .map((ingredient) => ingredient.ingredient)
                    .join(", ")}
                />
              </div>
            ))}
          </StatusOrderCard>
        ))}
      </div>
      <ModalKitchenOrder
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        orderData={selectedOrder}
      />
    </main>
  );
}
