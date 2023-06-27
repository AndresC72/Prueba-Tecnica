import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../services/orderService';
import OrderList from '../components/OrderList';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Cargar los pedidos iniciales al montar la página
    loadOrders();
  }, []);

  const loadOrders = async () => {
    // Código para cargar los pedidos desde el servicio
    // ...
    setOrders(loadedOrders);
    setTotalPages(totalPages);
  };

  const handleNextPage = () => {
    // Cargar la siguiente página de pedidos
    setCurrentPage(currentPage + 1);
    loadOrders();
  };

  return (
    <div className="home-page">
      <OrderList orders={orders} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
      />
    </div>
  );
};

export default HomePage;
