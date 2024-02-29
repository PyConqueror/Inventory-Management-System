import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as productServices from '../../API Services/productServices';

function ProductInfoPage() {
  const [product, setProduct] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    fetchProduct();
  }, [productID]);

  async function fetchProduct() {
    const response = await productServices.getProductInfo(productID);
    setProduct(response.data);
}
  if (!product) {
    return <div>Loading product information...</div>;
}

  return (
    <div>
      <h1>Product Information</h1>
      <p><strong>Item Name:</strong> {product.itemName}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Stock Quantity:</strong> {product.stockQuantity}</p>
      <p><strong>Supplier ID:</strong> {product.supplier.name}</p>
    </div>
  );
}

export default ProductInfoPage;
