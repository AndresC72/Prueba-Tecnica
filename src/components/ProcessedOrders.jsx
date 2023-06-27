import React, { useEffect, useState } from 'react';
import { fetchProcessedOrders } from '../services/orderService';

const ProcessedOrders = () => {
  const [processedOrders, setProcessedOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await fetchProcessedOrders();
      setProcessedOrders(orders);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Processed Orders</h1>
      {processedOrders.map((order) => (
        <div key={order.id}>
          <h2>Order ID: {order.id}</h2>
          {/* Mostrar otros datos del pedido */}
        </div>
      ))}
    </div>
  );
};

export default ProcessedOrders;
