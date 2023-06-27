import { firestore, FieldValue } from '../conf/firebase';

const fetchOrders = async () => {
  const ordersCollection = firestore.collection('orders');
  const snapshot = await ordersCollection.get();
  const orders = [];

  snapshot.forEach((doc) => {
    orders.push({ id: doc.id, ...doc.data() });
  });

  return orders;
};

const fetchProductImage = async (sku) => {
  // Código para obtener la imagen del producto por SKU
  // ...

  return skuImgSrc;
};

const calculateAndValidateTotal = async (orders) => {
  const updatedOrdersWithImages = [];

  for (const order of orders) {
    const { items, total } = order;

    // Validar la suma de precios de los artículos
    let itemsTotal = 0;
    for (const item of items) {
      const { price } = item;
      itemsTotal += price;
    }

    if (itemsTotal !== total) {
      console.log('Error: La suma de los precios de los artículos no coincide con el precio total del pedido');
      continue; // Pasar al siguiente pedido
    }

    // Validar los IDs de productos en los artículos
    let hasInvalidProductIDs = false;
    for (const item of items) {
      const { productID } = item;
      if (!isValidProductID(productID)) {
        hasInvalidProductIDs = true;
        break; // Salir del bucle al encontrar un ID de producto inválido
      }
    }

    if (hasInvalidProductIDs) {
      console.log('Error: Al menos un artículo tiene un ID de producto inválido');
      continue; // Pasar al siguiente pedido
    }

    // Validar los SKUs de los artículos
    let hasInvalidSKUs = false;
    for (const item of items) {
      const { sku } = item;
      if (!isValidSKU(sku)) {
        hasInvalidSKUs = true;
        break; // Salir del bucle al encontrar un SKU inválido
      }
    }

    if (hasInvalidSKUs) {
      console.log('Error: Al menos un artículo tiene un SKU inválido');
      continue; // Pasar al siguiente pedido
    }

    // Obtener la imagen del producto por SKU
    const updatedItems = [];
    for (const item of items) {
      const { sku } = item;
      const skuImgSrc = await fetchProductImage(sku);
      updatedItems.push({ ...item, skuImgSrc });
    }

    // Guardar el pedido en Firestore
    const orderData = {
      ...order,
      verificationTimestamp: FieldValue.serverTimestamp(),
    };

    const ordersCollection = firestore.collection('orders');

    try {
      const docRef = await ordersCollection.add(orderData);
      console.log('Order saved with ID:', docRef.id);
    } catch (error) {
      console.error('Error saving order:', error);
    }

    updatedOrdersWithImages.push({ ...order, items: updatedItems });
  }

  return updatedOrdersWithImages;
};

const fetchProcessedOrders = async () => {
  const processedOrdersCollection = firestore.collection('processedOrders');
  const snapshot = await processedOrdersCollection.get();
  const processedOrders = [];

  snapshot.forEach((doc) => {
    processedOrders.push({ id: doc.id, ...doc.data() });
  });

  return processedOrders;
};

const isValidProductID = (productID) => {
  // Código para validar el ID de producto
  // Retorna true si el ID es válido, false en caso contrario
};

const isValidSKU = (sku) => {
  // Código para validar el SKU
  // Retorna true si el SKU es válido, false en caso contrario
};

export { fetchOrders, calculateAndValidateTotal, fetchProcessedOrders };
