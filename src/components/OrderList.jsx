import React from 'react';
import OrderItem from './OrderItem';

const OrderList = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
