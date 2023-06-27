import { firestore } from '../firebase/firebaseConfig';

const fetchProductImage = async (sku) => {
  try {
    const productsCollection = firestore.collection('products');
    const querySnapshot = await productsCollection.where('item_product_sku', '==', sku).get();

    if (querySnapshot.empty) {
      // No se encontró ningún producto con el SKU dado
      return null;
    }

    // Se asume que solo hay un producto con el SKU dado
    const productData = querySnapshot.docs[0].data();
    const skuImgSrc = productData.sku_img_src;

    return skuImgSrc;
  } catch (error) {
    console.error('Error fetching product image:', error);
    return null;
  }
};

export { fetchProductImage };
