import React from 'react';

const OrderItem = ({ order }) => {
  const { id, items, total, itemsTotal, isValid } = order;

  return (
    <div>
      <h3>Order ID: {id}</h3>
      <p>Items: {items.length}</p>
      <p>Items Total: {itemsTotal}</p>
      <p>Total: {total}</p>
      <p>Is Valid: {isValid ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default OrderItem;
