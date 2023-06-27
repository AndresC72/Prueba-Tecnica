import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../conf/firebase';

const OrderDetails = () => {
  const { order_number } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const orderRef = firestore.collection('orders').where('order_number', '==', order_number);
        const snapshot = await orderRef.get();
        if (!snapshot.empty) {
          const orderData = snapshot.docs[0].data();
          setOrderDetails(orderData);
        }
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, [order_number]);

  const handleMarkAsDispatched = async () => {
    try {
      const orderRef = firestore.collection('orders').doc(orderDetails.id);
      await orderRef.update({ order_state: 'Despachado' });
      setOrderDetails((prevOrder) => ({ ...prevOrder, order_state: 'Despachado' }));
      console.log('Order marked as dispatched');
    } catch (error) {
      console.error('Error marking order as dispatched:', error);
    }
  };

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  // Renderizar los detalles del pedido, incluyendo las validaciones y las imágenes de los SKU

  return (
    <div>
      <h1>Detalles del Pedido {order_number}</h1>
      {/* Mostrar las validaciones y las imágenes de los SKU */}
      <button onClick={handleMarkAsDispatched}>Despachado</button>
    </div>
  );
};

export default OrderDetails;
