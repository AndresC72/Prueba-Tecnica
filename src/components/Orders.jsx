import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orderBy, setOrderBy] = useState('desc'); // Estado para el orden de visualización de los pedidos

  const handleToggleOrder = () => {
    setOrderBy(orderBy === 'desc' ? 'asc' : 'desc'); // Cambiar el orden al contrario del actual
  };

  // Código para obtener los pedidos

  const sortedOrders = orders.sort((a, b) => {
    if (orderBy === 'desc') {
      return b.timestamp - a.timestamp; // Ordenar de más reciente a más antiguo
    } else {
      return a.timestamp - b.timestamp; // Ordenar de más antiguo a más reciente
    }
  });

  const handleOrderClick = (orderNumber) => {
    // Redirigir a la ruta /orders/{{order_number}}
    // Puedes utilizar React Router para manejar la navegación y pasar el número de pedido como parámetro
  };

  // Resto del código del componente Orders

  return (
    <div className="orders">
      <div className="order-orderby">
        <button onClick={handleToggleOrder}>
          Orden: {orderBy === 'desc' ? 'Más reciente primero' : 'Más antiguo primero'}
        </button>
      </div>

      {/* Renderizar la lista de pedidos */}
      {sortedOrders.map((order) => (
        <div key={order.order_number} onClick={() => handleOrderClick(order.order_number)}>
          <h2>Número de Pedido: {order.order_number}</h2>
          {/* Mostrar otros detalles del pedido */}
        </div>
      ))}
    </div>
  );
};

export default Orders;
